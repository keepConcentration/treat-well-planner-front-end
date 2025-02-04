# 🌐 Treat Well Planner - Frontend

## 📖 프로젝트 소개
**Treat Well Planner - Frontend**는 사용자가 일정 및 계획을 손쉽게 관리할 수 있도록 지원하는 SPA(Single Page Application)입니다.  
React를 사용하여 구축된 이 프론트엔드 앱은 `Treat Well Planner`의 백엔드와 통신하며, 사용자 친화적인 UI를 제공합니다.

---

## 🚧 프로젝트 상태
현재 **Treat Well Planner - Frontend**는 개발 진행 중입니다.  
1차 목표는 MVP(Minimum Viable Product) 개발을 완료하고, 사용자가 기본적인 일정 생성/수정/삭제 기능을 사용할 수 있도록 하는 것입니다.

---

## ✨ 주요 기능
- 🗓 **일정 관리**:
   - 일정 생성, 수정, 삭제
   - 지정된 반복 규칙을 가진 일정 관리
- 🌟 **JWT 기반 사용자 인증**:
   - Kakao 및 Google OAuth API를 활용한 로그인/로그아웃
   - JWT(Access Token, Refresh Token)를 통한 인증 상태 관리
- 🔁 **자동 로그인 및 토큰 갱신**:
   - Access Token 만료 시 Refresh Token을 이용한 자동 갱신
- 🔍 **일정 조회 및 필터링**:
   - 특정 날짜 기준 일정 조회
   - 반복 일정 및 무기한 일정 표시

---

## 🛠️ 기술 스택
### **🔹 프론트엔드**
- ⚛️ **React 19**: 최신 버전의 React 라이브러리
- 🔀 **React Router v7**: 클라이언트 사이드 라우팅 구현
- 🍃 **Tailwind CSS** (Optional): 스타일링에 추가적으로 활용 가능
- 🌐 **Axios 또는 Fetch**: API 호출 및 데이터 통신
- 🎨 **Google OAuth 및 Kakao OAuth**:
   - OAuth 인증 연동을 통해 손쉬운 로그인 처리

### **🔹 상태 관리**
- React 상태 관리 Hooks(`useState`, `useEffect`) 사용
- 클라이언트 인증 상태 및 쿠키 처리: `authorize-access-token`, `refresh-token` 기반

---

## 🚀 설치 및 실행
### **1. 시스템 요구사항**
- **🔹 Node.js 18.x 이상 (권장)**
- **🔹 npm 8.x 이상**

### **2. 프로젝트 클론**
```bash
git clone https://github.com/keepConcentration/treat-well-planner-frontend.git
cd treat-well-planner-frontend
```

### **3. 의존성 설치**
```bash
npm install
```

### **4. 환경 변수 설정**
`.env` 파일을 생성한 뒤 API 서버 및 OAuth 인증 키를 설정합니다.

```plaintext
REACT_APP_BASE_URL=http://localhost:3000      # 프론트엔드 주소
REACT_APP_API_BASE_URL=http://localhost:8080  # 백엔드 API 주소
REACT_APP_KAKAO_KEY=YOUR_KAKAO_API_KEY        # 카카오 API 키
REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID  # Google OAuth Client ID
```

### **5. 애플리케이션 실행**
```bash
npm start
```

- 기본 주소: `http://localhost:3000`
- 백엔드 API와 통신이 가능해야 정상 작동합니다.

---

## 🎮 주요 화면
### **1. 로그인**
- 카카오톡 및 Google OAuth를 활용한 인증:
   - `GET /auth/kakao` → 카카오 로그인을 위한 토큰 제공
   - Google Login → 클라이언트 ID 제공받아 사용

### **2. 일정 관리**
- 일정 생성, 수정, 삭제 화면:
   - 날짜 선택 및 저장을 통해 일정 관리

### **3. 무기한 일정 및 반복 일정**
- 생성된 일정의 반복 여부 및 무기한 일정을 시각화하여 제공.

---

## 🍪 인증 및 토큰 처리
1. **Access Token 및 Refresh Token**:
   - 사용자가 로그인 시 `authorize-access-token`과 `refresh-token` 쿠키에 저장.
   - Access Token 만료 시 자동으로 Refresh Token을 사용해 새 토큰 발급.

2. **쿠키 관리**:
   - `authorize-access-token` 쿠키: HTTP 요청 헤더에 포함.
   - `refresh-token` 쿠키: 서버와의 자동 토큰 갱신 요청에 사용.

3. **백엔드 API 통신** (공통 `api.js`):
   - 백엔드와의 인증 처리를 일괄적으로 처리.

---

## 🔗 API 통신 구조
프론트엔드는 백엔드 API와 통신합니다. 주요 경로는 다음과 같습니다:

| **메서드** | **엔드포인트**                  | **설명**                       |
|--------|-----------------------------|------------------------------|
| POST   | /api/auth/kakao/login      | 카카오 인증코드로 토큰 발급            |
| GET    | /api/auth/validate-token   | 토큰 유효성 검사                   |
| GET    | /plans                     | 특정 날짜 기반 일정 조회             |
| POST   | /plans                     | 새 일정 생성                     |
| DELETE | /plans/{id}                | 일정 삭제                       |

---

## 🧪 테스트
- **클라이언트 테스트**:
   - 테스트는 주로 기존 브라우저 인터페이스를 활용한 수동 QA 기반입니다.
   - 필요시 React Testing Library를 통해 단위 테스트를 추가할 수 있습니다.

```bash
npm test
```

---

## 🛠️ 향후 추가 예정 기능
### 🔹 기능 확장
- 캘린더 UI 추가
- 일정 드래그 앤 드롭 지원
- 알림 기능 제공

### 🔑 인증
- OAuth 외부 인증 서비스 확장
- 핸드폰 번호 등 추가 인증 방식 지원

---

## 🤝 기여 방법
1. 이 리포지토리를 포크합니다.
2. 기능 개발을 위한 새로운 브랜치를 생성합니다:  
   `git checkout -b feature/my-new-feature`
3. 변경을 커밋합니다:  
   `git commit -m "Add some feature"`
4. 브랜치를 푸시합니다:  
   `git push origin feature/my-new-feature`
5. Pull Request를 생성하고 리뷰를 기다립니다.

---

## 📜 라이선스
이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.

---