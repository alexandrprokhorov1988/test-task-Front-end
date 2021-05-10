import React from 'react';
import './Form.css';

function Form({ onSubmit, children }) {

  return (
    <form action="#" method="post" className="form" noValidate onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form;
