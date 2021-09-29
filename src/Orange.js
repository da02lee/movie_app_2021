import React from "react";      // 컴포넌트는 자바스크립트와 html을 조합한 JSX라는 문법을 사용해서 만듦. 이 코드를 입력해야 리액트가 JSX를 이해 함.

function Orange() { //Orange 컴포넌트의 기본 틀 완성. 이제 컴포넌트가 반환할 값 입력하기!(JSX로 작성)
  return <h1>I love orange</h1>;    //html처럼 보이지만 html이 아니라 JSX (아직 자바스크립트를 조합하지 않아서 html처럼 보인 것)
}

export default Orange;