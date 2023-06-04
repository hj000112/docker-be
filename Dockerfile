# 기반 이미지 설정
FROM node:16

# 작업 디렉토리 설정
WORKDIR /src/app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
# COPY . . : 현재 작업 디렉토리의 모든 파일과 폴더를 Docker 컨테이너의 작업 디렉토리로 복사한다는 의미
COPY . .

# 포트 설정 (Express 앱이 사용하는 포트로 수정)
EXPOSE 3000

# 컨테이너 실행 시 실행할 명령어
CMD ["npm", "run", "start"]
