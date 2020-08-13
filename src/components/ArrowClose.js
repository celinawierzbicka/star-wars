import React from 'react';

import arrowClose from '../assets/ARROW_CLOSE.svg';

const ArrowClose = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={arrowClose} alt="ArrowClose" />
    </div>
  );
}
export default ArrowClose;