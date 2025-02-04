import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import KakaoCallback from "./pages/KakaoCallback";
import MainPlanner from "./components/MainPlanner";
import RedirectHandler from "./components/RedirectHandler"; // 리디렉션 처리 컴포넌트

function App() {
  return (
      <Router>
        <Routes>
          {/* "/" 경로 접근 시 토큰 유효성에 따라 리다이렉트 */}
          <Route path="/" element={<RedirectHandler />} />

          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />

          {/* 카카오 로그인 콜백 처리 페이지 */}
          <Route path="/auth/kakao/callback" element={<KakaoCallback />} />

          {/* Planner 페이지 */}
          <Route path="/planner" element={<MainPlanner />} />
        </Routes>
      </Router>
  );
}

export default App;