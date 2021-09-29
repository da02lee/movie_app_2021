import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [  // foodILike 변수에 빈 배열을 저장. map( ) 함수를 foodILike 배열에 적용하여 코드 작성. id값은 유일해야 하므로 중복된 값 X. why? 리액트는 Food 컴포넌트가 서로 다르다는 걸 알 수 X. 리액트에게 컴포넌트가 서로 다르다는 것을 알려 주는 방법이 key props 추가하는 것
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
    //rating: 4.8,
  },
  {
    id: 5,
    name: '김밥',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 4.7,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />    // Food 컴포넌트에 key props 추가. key props의 값으로 {dish.id}를 전달. * key props는 리액트 내부에서 사용되는 특수한 props라서 Food 컴포넌트에 직접 전달되지 않음. 이 특징 기억!
      ))}
    </div>
  );
}
// image={dish.image} 
// Warning: Failed prop type: The prop `picture` is marked as required in `Food`, but its value is `undefined`.   
// Food 컴포넌트에 picture라는 이름의 props가 필요한데, 그 값이 undefined -> Food 컴포넌트에 picture props가 아니라 image props(picture라는 이름의 props가 없어서)를 전달했기 때문에

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number//.isRequired,   // isRequired 사용시 필수 요소. 삭제하면 rating이 필수 요소X. 다만, 값이 전달되는 경우 자료형이 number이긴 해야함. 돈까스의 경우 rating 값이 없지만 isRequired인 name, picture이 있어서 불러올 수 있음.
  // rating: PropTypes.string.isRequired,  // 콘솔창에 경고 뜸. Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`. * rating은 숫자로 작성됨. string자료형이 아니라 number자료형이 필요
};

export default App;
