import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(    //그린다고 생각하면 돼
  <App />, document.getElementById('root')    //App 컴포넌트를, 아이디가 'root'인 엘리먼트에! index.html <div id="root"></div>와 맞춰줘야 함
);

/* ReactDOM.render(    
  <App /><Orange />, document.getElementById('root')    //오류 발생함. why? <App /><Orange /> 두 개의 컴포넌트를 그리려 해서 오류 발생! 리액트는 최종으로 단 한 개의 컴포넌트를 그려야 함. 그러므로 Orange 컴포넌트는 App 컴포넌트 안에 넣어줘야 함.
                                                        //how? App.js 참고 - import Orange from './Orange';   // <Orange></Orange>
                                                        //다른 방법은 App 컴포넌트 안에 Potato 컴포넌트 만들어서 사용하기 App.js 참고! -> 한 파일에서 작업 시 이동x, 짧은 코드로 작성하기 good!
); */

