ex02: 번들링 환경(webpack.config.js) 설정

1. 설치 패키지
// command 라인에서 core를 실행시키기 위함(-cli)
$ npm i -D express webpack webpack-cli

2.번들링환경(webpack.config.js) 설정
  1) entry
  2) output

3. 스크립팅
"scripts": {
    "start": "node dev-server",
    "build": "npx webpack "
  }

3. 빌드
$ npm run build

4. 실행
$ npm start