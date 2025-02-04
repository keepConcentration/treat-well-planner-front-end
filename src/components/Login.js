import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import apiFetch from "../utils/api";
import config from "../config/config";

function Login() {
  const navigate = useNavigate();
  const frontendBaseUrl = config.frontend.baseUrl;

  const kakaoLogin = () => {
    // 카카오 로그인을 실행하는 함수
    window.Kakao.Auth.authorize( {
      redirectUri: `${frontendBaseUrl}/auth/kakao/callback`,
    });
  };

  const onGoogleSuccess = (response) => {
    console.log("Google 로그인 성공:", response);
    alert("Google 로그인 성공!");
    // 여기에서 서버로 토큰 전달 혹은 추가 작업 실행
  };

  const onGoogleFailure = (error) => {
    console.log("Google 로그인 실패:", error);
    alert("Google 로그인 실패!");
  };

  // 쿠키 읽기 함수
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  useEffect(() => {
    // 컴포넌트 로드 시 쿠키의 액세스 토큰 확인
    const token = getCookie("authorize-access-token");
    if (token) {
      // API 요청: 토큰 유효성 검사
      apiFetch("/api/auth/validate-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => navigate("/planner"));
    }
  }, [navigate]);

  React.useEffect(() => {
    if (!window.Kakao.isInitialized() ) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY); // 환경 변수에서 키 읽기
    }
  }, []);

  return (
      <div style={styles.container}>
        <h1>환영합니다!</h1>
        <div style={styles.buttonContainer}>
          {/* Google 로그인 */}
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* TODO YOUR_GOOGLE_CLIENT_ID를 발급받은 클라이언트 ID로 변경 */}
            <GoogleLogin
                onSuccess={onGoogleSuccess}
                onError={onGoogleFailure}
                width={300}
            />
          </GoogleOAuthProvider>

          {/* Kakao 로그인 */}
          <button style={styles.kakaoButton} onClick={kakaoLogin}>
            카카오톡으로 로그인
          </button>
        </div>
      </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  kakaoButton: {
    padding: "10px 20px",
    backgroundColor: "#FEE500",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;