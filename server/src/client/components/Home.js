import React from 'react';

const Home = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <div>I'm home component 4</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
