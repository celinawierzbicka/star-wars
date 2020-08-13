import React from 'react';

import arrowOpen from '../assets/ARROW_OPEN.svg';

const ArrowOpen = ({ onClick }) => {
  return (
    <div onClick={onClick} >
      <img src={arrowOpen} alt="ArrowOpen" />
    </div>
  );
}
export default ArrowOpen;