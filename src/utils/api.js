import config from "../config/config";

// 쿠키 읽기 함수
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

// 공통 fetch 함수
const apiFetch = async (endpoint, options = {}) => {
  const url = `${config.api.baseUrl}${endpoint}`;

  const accessToken = getCookie("authorize-access-token"); // 쿠키에서 accessToken 가져오기

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  if (accessToken) {
    defaultOptions.headers.Authorization = `Bearer ${accessToken}`;
  }

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    if (response.status === 401) {
      // 401 Unauthorized => accessToken 만료
      await refreshAccessToken(); // 토큰 갱신 요청
      const newAccessToken = getCookie("authorize-access-token");
      if (newAccessToken) {
        // 새 토큰으로 Authorization 헤더 설정 후 요청 재시도
        defaultOptions.headers.Authorization = `Bearer ${newAccessToken}`;
        const retryResponse = await fetch(url, { ...defaultOptions, ...options });
        if (!retryResponse.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${retryResponse.status}`);
        }
        return retryResponse.status === 204 ? null : retryResponse.json();
      } else {
        throw new Error("액세스 토큰 갱신 실패");
      }
    }

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    return response.status === 204 ? null : response.json();
  } catch (error) {
    throw error;
  }
};

// 토큰 갱신 함수
const refreshAccessToken = async () => {
  const refreshToken = getCookie("refresh-token");
  const accessToken = getCookie("authorize-access-token"); // 쿠키에서 accessToken 가져오기

  if (!refreshToken) {
    console.error("Refresh Token이 존재하지 않습니다.");
    return null;
  }

  try {
    const response = await fetch(`${config.api.baseUrl}/api/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${refreshToken}` }),
      },
      // body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (data.value) {
      // 새 accessToken 저장 (브라우저 쿠키 업데이트)
      document.cookie = `authorize-access-token=${data.value};path=/;`;
      return data.value; // 새 accessToken 반환
    }

    return accessToken;
  } catch (err) {
    return null;
  }
};

export default apiFetch;