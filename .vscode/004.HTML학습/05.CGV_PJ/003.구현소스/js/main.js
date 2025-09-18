// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");


// 3. 클릭된 a요소 자식중 h2요소의 글자읽기
let 영화명 = 요소.querySelector("h2").innerText;
console.log("클릭된 영화명", 영화명);

// 4. 아이프레임 소스 변경하기
아이프레임.src = `https://www.youtube.com/embed/&{유튜브{영화명}}?autoplay=1`;