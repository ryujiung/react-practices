Emaillist: Frontend

1.  설치
    1)  개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
    2)  라이브러리
        $ npm i react react-dom prop-types react-addons-update

2.  설정
    1)  webpack.config.js
    2)  babel.config.json

3.  스트립팅
    "scripts": {
        "debug": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4.  테스트 서버 실행
    $ npm run debug



1. backend
    1) 테스트(개발 모드)
        eclipse ctrl+f11 (스프링부트 애플리케이션 실행)
    
    2) 빌드(배포) 
        # mvn -f emaillist/backend exec:exec clean package

    3) 테스트
        # java -D spring.profiles.active=production -jar emaillist/backend/target/emaillist.jar


3-1.deploy: ssh연결(ssh key 인증)
    1) Key 생성하기
    # ssh-keygen -t rsa -b 2048 -m PEM -C "rju1202@gmail.com"

    2) key 
