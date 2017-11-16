import React from 'react';
import Image from './Image';

export default ({ title, image, meta }) => {
  return (
    <div className="feature text-center mb-5">
      <div className="feature__img-container mx-auto mb-3">
        <Image
          className="mb-2 feature"
          alt="feature"
          src={image}
        />
      </div>
      <h5 className="mb-2">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: meta }} />
    </div>
  )
}
