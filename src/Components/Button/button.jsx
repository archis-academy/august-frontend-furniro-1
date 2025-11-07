import React from 'react';
import './button.scss';

function Buttons({ text, variant = 'primary', onClick,disabled }) {
  return (
    <>
      <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
}

export default Buttons;
