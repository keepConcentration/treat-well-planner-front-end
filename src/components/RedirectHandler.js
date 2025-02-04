import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../utils/api";

function RedirectHandler() {
  const navigate = useNavigate();

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  useEffect(() => {
    const token = getCookie("authorize-access-token");

    if (token) {
      // 서버에 토큰 유효성 검사 요청
      apiFetch("/api/auth/validate-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 포함
        },
      })
      .then(() => navigate("/planner"))
      .catch(() => {
        navigate("/login"); // 오류 발생 시 /login으로 이동
      });
    } else {
      navigate("/login"); // 토큰이 없으면 /login으로 이동
    }
  }, [navigate]);

  return (
      <div>
        <p>Redirecting...</p>
      </div>
  );
}

export default RedirectHandler;