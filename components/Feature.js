import React from 'react';

export default ({ title, image, meta }) => {
  return (
    <div className="feature text-center">
      <h4 className="mb-2">{title}</h4>
      <img
        className="mb-2"
        alt="feature"
        src={`/static/features/${image}.png`}
        srcSet={`/static/features/${image}@2x.png 2x`}
      />
      <p dangerouslySetInnerHTML={{ __html: meta }} />
    </div>
  )
}
