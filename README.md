# Netflix clone
포트폴리오용으로 제작된 Netflix 클론 코딩 프로젝트입니다.  
  
NextJS를 사용하였으며, 현재는 영화들의 간단한 정보만을 SSR에서 미리 로딩합니다.  
  
Api는 themoviedb.org 의 api를 이용하였으며, 모든 영화 및 드라마 정보가 넷플릭스의 정보와 일치하지는 않습니다.  
  
Intersection Observer를 이용하여 Lazy Image Loading을 적용하였습니다.  

![netflix-1](https://user-images.githubusercontent.com/7731519/80943555-6d2e3b00-8e22-11ea-984c-b68053a1d244.png)

![netflix-3](https://user-images.githubusercontent.com/7731519/80943568-74554900-8e22-11ea-9a86-b55d8b53ff7d.png)

## 프로젝트 설치
```
git clone https://github.com/cjy9306/netflix-clone.git
npm install
```

## 프로젝트 설치 및 실행
시작
```
npm start
```
빌드 환경의 경우 package.json의 NODE_ENV 환경변수를 변경하여 설정하실 수 있습니다.

## 프로젝트 구조
root
 - next.config.js: next의 webpack 커스텀 설정. 
 - static: 프로젝트에서 사용할 asset 파일들(css, images)
 - pages: next에서 사용하는 page 폴더. 각 페이지의 루트 페이지가 있음.
   - _app.js: 모든 컴포넌트를 실행할 때마다 같이 실행되는(먼저) 컴포넌트. header 및 페이지 이동시 progress bar 적용
   - 그 외 파일들: 각 페이지에 해당하는 파일들
 - components: 리액트 컴포넌트들. 현 프로젝트에선 공통 컴포넌트만 존재
 
## 사용법
해당 프로젝트가 필요하신 분들은 아래 내용을 수정하신 후 사용하시면 됩니다.
- themoviedb의 api key가 필요합니다. 
- 각 페이지에 api요청하는 부분이 있는데 해당 부분의 api key에 요청하시면 됩니다.
