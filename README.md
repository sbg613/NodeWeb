### 설치 내용 npm i
 "dependencies": {
    "express": "^4.18.2",
    => http 통신을 위한 https://www.npmjs.com/package/express
    "morgan": "^1.10.0"
    => 서버 통신 로그를 위한 https://www.npmjs.com/package/morgan
  },
  "devDependencies": {
    "@babel/core": "^7.20.7",
    "@babel/node": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    => 개발을 편하게 하기위해 자바스크립트 ES6이상 문법을 NODE JS에 알아 먹게 하기 위한 반영을 위한
    "nodemon": "^2.0.20"
    => babel을 NODEJS에서 실행하기 위한
  }

### Router URL설명
/ -> home
/join
/login
/search

/users/edit
/users/delete

/videos/watch
/videos/edit
/videos/delete
/videos/comments
/videos/comments/delete