import React from 'react';

const Image = ({ src, retina, ...props }, { locals }) => {
  const fileName = src.split('.');
  const ext = fileName.pop();
  return(
    <img
      alt={`${fileName}`}
      src={`${locals.prefix}/static/${src}`}
      srcSet={ retina ? `${locals.prefix}/static/${fileName}@2x.${ext} 2x` : ''}
      {...props}
    />
  )
}

Image.contextTypes = {
  locals: React.PropTypes.object
};

Image.defaultProps = {
  retina: true
};

export default Image;
