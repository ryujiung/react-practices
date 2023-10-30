ex01: js Module 번들링 하기

1. 설치 패키지
// command 라인에서 core를 실행시키기 위함(-cli)
$ npm i -D express webpack webpack-cli

2. 스크립팅
"scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  }

3. 빌드
$ npm run build

4. 실행
$ npm start