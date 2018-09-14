import React from 'react';

const Fruit = (props) => {
  return (
    <p onClick={props.clicked}>This is a {props.name} and it costs {props.cost}.</p>
  )
}

export default Fruit;