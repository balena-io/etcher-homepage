import React from 'react';
import Image from './Image';

export default ({ title, image, meta }) => {
  return (
    <div className="feature text-center mb-5">
      <Image
        className="mb-2"
        alt="feature"
        src={`features/${image}.png`}
      />
      <h4 className="mb-2">{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: meta }} />
    </div>
  )
}
