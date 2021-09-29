import React from 'react';
import Orange from './Orange';

function Food({ fav }) {    // 구조 분해 할당 문법
  return <h1>I like {fav}</h1>;
}

/* 점 연산자 사용
function Food(props) {    // Ctrl + Shift + L 한 번에 같은 단어 모두 선택. 수정 시 일괄 적용됨. Ctrl + D 와 Ctrl + U는 같은 단어 하나씩 선택 됨.
  // console.log(props);   // 전달받은 props를 props라는 인자로 받아 출력! 콘솔에 {fav:'고기'}만 출력. 문자열 '고기'를 화면에 그대로 출력하고 싶다면 아래 줄 참고! 이 부분 주석처리하면 console창에 안나옴
  return <h1>I like {props.fav}</h1>;   // '고기'를 콘솔창이 아니라 화면에 그대로 출력하려면 props.fav를 중괄호로 감싸서 사용하기~ 
}
*/

/* 객체에 있는 값을 사용하려면 props.fav처럼 점 연산자(.) 사용하기. ES6 문법 중 구조 분해 할당을 사용하면 점 연산자를 사용하지 않아도 됨!
  props에 포함된 데이터의 개수가 적으면 props.fav처럼 점 연산자를 사용해도 불편x, props에 포함된 데이터의 개수가 많아지면 매번 점 연산자 사용하기 불편. -> 구조 분해 할당 사용하면 편리
*/

/* 두 방법 중 아무거나 사용해도 됨! *리액트에서 객체는 중괄호 양쪽을 공백으로 채움{ fav } / JSX의 자바스크립트는 중괄호 양쪽을 공백으로 채우지 않는 방법{fav}으로 구분!
  ES6 구조 분해 할당 문법 사용 1
  function Food(props) {
    { fav } = props;
    return <h1>I like {fav}</h1>;
  }

  ES6 구조 분해 할당 문법 사용 2
  function Food({ fav }) {
    return <h1>I like {fav}</h1>;
  }
*/

function App( ) { 
  return (
    <div>
      <i><h1>으라차차 ᕙ(•̀‸•́‶)ᕗ</h1></i>
      <Orange></Orange>
      <Food fav="고기" something={true} papapa={['hello', 1, 2, 3, 4, true]}/>
      <Food fav="고기"/>
      <Food fav="라면"/>
      <Food fav="로제떡볶이"/>
      <Food fav="김밥"/>
    </div>
  );
}
/* Food 컴포넌트에 props를 이용해 데이터를 보냄. Food 컴포넌트에 사용한 props의 이름은 fav이고, fav에 값을 담아 Food 컴포넌트에 전달.
  props에는 불리언 값, 숫자, 배열 같은 다양한 형태의 데이터 담기 가능. 
   *주의할 점 - props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호 { }로 값을 감싸야 함. something, papapa같은 props는 { }로 값을 감싸주었음.
*/

export default App;
