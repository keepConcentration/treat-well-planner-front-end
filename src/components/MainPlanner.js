import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function MainPlanner() {
  const [currentMonth, setCurrentMonth] = useState(""); // 현재 월 정보
  const [daysInMonth, setDaysInMonth] = useState([]); // 월간 일 리스트

  const navigate = useNavigate();

  // 쿠키 읽기 함수
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  };

  // 로그인 상태를 확인
  useEffect(() => {
    const token = getCookie("authorize-access-token"); // 쿠키에서 토큰 확인
    if (!token) {
      navigate("/login"); // 토큰 없으면 /login으로 이동
    }
  }, [navigate]);

  // 현재 월의 데이터 계산
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = 1월, 1 = 2월...

    // 현재 월 이름 설정
    const monthNames = [
      "1월", "2월", "3월", "4월", "5월", "6월",
      "7월", "8월", "9월", "10월", "11월", "12월",
    ];
    setCurrentMonth(monthNames[month]);

    // 현재 월의 날짜 계산
    const days = [];
    const lastDay = new Date(year, month + 1, 0).getDate(); // 해당 월의 마지막 날짜
    for (let i = 1; i <= lastDay; i++) {
      days.push(i);
    }
    setDaysInMonth(days);
  }, []);

  return (
      <div style={styles.container}>
        <h1>{currentMonth} Planner</h1>
        <div style={styles.grid}>
          {daysInMonth.map((day) => (
              <div key={day} style={styles.day}>
                {day}
              </div>
          ))}
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
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)", // 주간 7일 표시
    gap: "10px",
    marginTop: "20px",
  },
  day: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    fontWeight: "bold",
  },
};

export default MainPlanner;