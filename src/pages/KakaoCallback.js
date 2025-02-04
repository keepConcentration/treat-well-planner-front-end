import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../utils/api";

function KakaoCallback() {
  const navigate = useNavigate();

  // 쿠키 저장 함수
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // n일 후 만료
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  useEffect(() => {
    // 현재 URL에서 인증 코드(code) 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      // 서버로 인증 코드를 전달하여 JWT 토큰 요청
      apiFetch("/api/auth/kakao/login", {
        method: "POST",
        body: JSON.stringify({ code }), // 카카오 인증 코드를 서버로 전달
      })
      .then((data) => {
        if (data.accessToken && data.refreshToken) {
          // JWT와 RefreshToken을 쿠키에 저장
          setCookie("authorize-access-token", data.accessToken.value, 7); // 유효기간 7일
          setCookie("refresh-token", data.refreshToken.value, 30); // RefreshToken은 더 긴 유효기간
          navigate("/planner"); // 메인 페이지로 이동
        } else {
          alert("로그인 실패. 다시 시도해주세요.");
          navigate("/login"); // 로그인 실패 시 로그인 페이지로 리디렉트
        }
      })
      .catch(() => {
        alert("인증 처리 중 문제가 발생했습니다.");
        navigate("/login");
      });
    } else {
      alert("카카오 인증 오류: 인증 코드가 없습니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
      <div style={styles.container}>
        <h1>인증 처리 중...</h1>
      </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    fontSize: "18px",
  },
};

export default KakaoCallback;