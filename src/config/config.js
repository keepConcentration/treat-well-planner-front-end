const config = {
  frontend: {
    baseUrl: process.env.REACT_APP_BASE_URL, // 기본 프론트엔드 주소
  },
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL, // API URL
  },
  app: {
    mode: process.env.NODE_ENV, // 현재 실행 중인 모드 (development / production)
  },
};
export default config;