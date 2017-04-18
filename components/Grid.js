import React from 'react';

export default ({ items, Component, ...props }) => {
  return(
    <div  { ...props }>
      <div className="container">
        <div className="row">
        {
          items.map((item, i) => {
            return (
              <div key={i} className="col-md-4">
                <Component {...item} />
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  )
}
