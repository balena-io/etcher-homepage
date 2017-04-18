import React from 'react';
import Grid from './Grid';

export default ({title, story}) => {
  return(
    <div className="row">
      {
        story.map((item, i) => {
          return (
            <div key={i} className={`col-md-${12/story.length}`}>
              <p dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          );
        })
      }
    </div>
  )
}
