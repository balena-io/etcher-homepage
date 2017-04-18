import React from 'react';
import { Table } from 'reactstrap';

// TODO Convert this to a decorator?
export default ({ children, title, ...props}) => {
  return(
  <section {...props}>
    <div className="container">
      <h3 className="text-center mb-5">{title}</h3>
      { children }
    </div>
  </section>
  )
}
