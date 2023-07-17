import React from 'react';

const Person = (props) => {
  return (
    <div className='name'>
    <h1>People Name List</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Person;
