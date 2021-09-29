// 4장 액션03까지
import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [  // foodILike 변수에 빈 배열을 저장. map( ) 함수를 foodILike 배열에 적용하여 코드 작성.
  {
    id: 1,
    name: '김치',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: '비빔밥',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
    rating: 5,
  },
  {
    id: 4,
    name: '돈까스',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: '김밥',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  },
];

function renderFood(dish) {   // 여기가 renderFood() 함수 정의한 부분. map() 함수의 첫 번째 인자로 전달한 화살표 함수를 밖으로 빼서 일반 함수 renderFood()로 작성함. 기능은 동일.
  return <Food name={dish.name} picture={dish.image} />;
}
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;   // renderFood() 함수를 화살표 함수로 작성했을 때


/* p.92-93 map() 함수의 인자로 함수 전달하기 -> {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}를 {foodILike.map(renderFood)}로 변경

  function App() {
    return (
      <div>
        {foodILike.map(dish => (
          <Food name={dish.name} picture={dish.image} />
        ))}
      </div>
    );
  }

  - map() 함수의 인자로 함수 전달하기. 위를 아래처럼 바꾸기. 그 다음 renderFood() 함수를 정의하기.
  function App() { 
    return (
      <div>
        {foodILike.map(renderFood)}
      </div>
    );
  } */

function App() { 
  console.log(foodILike.map(renderFood));
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
/* {foodILike.map(dish           =>           (<food name={dish.name} />))}  함수가 값을 바로 반환하면 return 문 생략 가능!
    여기에 foodILike의 원소가 하나씩 넘어 옴     그 값을 name props에 전달
*/

export default App;
