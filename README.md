# Treat Well Planner Frontend

**Treat Well Planner Frontend**는 React 기반으로 개발된 사용자 플래너 애플리케이션의 프론트엔드입니다.  
이 프로젝트는 사용자가 **자신의 시간과 계획을 효율적으로 관리**하도록 돕기 위해 설계된 SPA(Single Page Application)입니다.

---

## 🛠 기술 스택

### 📌 주요 언어 및 기술
- **React**: 19.0.0 (최신 기능 활용)
- **JavaScript (ES6+)**: 직관적이고 가독성 높은 코드를 작성합니다.
- **CSS/SCSS**: 사용자 인터페이스 스타일링
- **REST API**: Spring Boot 백엔드와의 통신

### 📌 패키지 및 라이브러리
- **@react-oauth/google**: Google OAuth 로그인 통합
- **Kakao SDK**: Kakao 로그인 연동

---

## 🚀 주요 기능

1. **사용자 인증**
    - Google 및 Kakao 로그인을 통한 사용자 인증 지원
    - OAuth 2.0 인증 방식 사용
2. **계획 관리**
    - 일정 추가/수정/삭제 기능
    - 일정 알림 기능 확장 예정
3. **커스터마이징된 사용자 경험**
    - 직관적인 플래너 UI
    - 테마 및 UI 동적 커스터마이징

### 📷 스크린샷
> 아직 초기 개발 단계이므로 스크린샷과 데모를 곧 추가할 예정입니다!

---

## ⏳ 프로젝트 구조

```plaintext
treat-well-planner-frontend/
├── src/
│   ├── components/         # React 컴포넌트
│   ├── pages/              # 주요 페이지
│   ├── styles/             # CSS/SCSS 스타일 정의
│   ├── utils/              # 유틸리티 함수 및 헬퍼
│   └── App.js              # 애플리케이션 루트
├── public/                 # 정적 파일
├── package.json            # 패키지 목록 및 설정
└── README.md               # 프로젝트 문서
```

---

## 📦 설치 및 실행 방법

### 1. 프로젝트 클론
아래 명령어를 복사해서 프로젝트를 로컬로 복제합니다:

```bash
git clone https://github.com/keepConcentration/treat-well-planner-frontend.git
```

### 2. 의존성 설치
프로젝트 디렉토리로 이동 후 `npm install`로 의존성을 설치합니다.

```bash
cd treat-well-planner-frontend
npm install
```

### 3. 실행
로컬 개발 서버를 실행합니다.

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 이동하여 애플리케이션을 확인할 수 있습니다.

---

## 🔑 환경 변수 설정

개발 및 배포 단계에서 환경 변수를 활용합니다. 아래와 같은 `.env` 파일을 만들어 필요 항목을 채우세요:

```plaintext
REACT_APP_KAKAO_KEY=your_kakao_api_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

---
## 🧩 연동된 백엔드

이 프론트엔드 애플리케이션은 [Treat Well Planner Backend](https://github.com/keepConcentration/treat-well-planner-backend)와 통신합니다.
해당 백엔드는 Spring Boot로 작성되어 있으며 `REST API`를 통해 데이터 처리를 담당합니다.

---

## 🗂 브랜치 관리

- `main`: 안정적인 최신 코드
- `feature/`: 새로운 기능 개발
- `hotfix/`: 버그 수정

---

## 🤝 기여 방법

프로젝트에 기여하려면 아래 절차를 따라주세요:

1. 이 리포지토리를 포크합니다.
2. 새 브랜치를 만듭니다: `git checkout -b feature/your-feature-name`.
3. 변경 사항을 커밋합니다: `git commit -m "설명 추가"`.
4. 브랜치를 푸시합니다: `git push origin feature/your-feature-name`.
5. Pull Request를 생성합니다.

---

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](https://github.com/keepConcentration/treat-well-planner-frontend/blob/main/LICENSE) 파일을 참고하세요.

---

## 🙋 FAQ

**Q1. Google 또는 Kakao API 연동에러**
> API 키를 제대로 설정했는지 확인하세요. `.env`에서 생성된 키를 정확히 입력했는지 체크하세요.

**Q2. 실행 중 `CORS` 오류**
> 프론트엔드와 백엔드 간의 도메인 경로를 올바르게 설정하고 백엔드 CORS 정책을 확인하세요.

---

## ⭐ 연락하기

궁금한 점이나 도움 요청은 Issues를 등록해주세요:

- GitHub Issues: [Issues](https://github.com/keepConcentration/treat-well-planner-frontend/issues)