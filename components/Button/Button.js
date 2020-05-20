import React from 'react';

const Button = ({ children, color, handler, submit }) => {
  return (
    <button type={submit ? "submit" : "button"} className={`btn btn--${color}`} onClick={handler || null}>
      {children}
    </button>
  );
};

export default Button;
