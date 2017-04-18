import React from 'react';

export default ({ src, ...props }) => {
  const fileName = src.split('.');
  const ext = fileName.pop();
  return(
    <img
      alt={`${fileName}`}
      src={`/static/${src}`}
      srcSet={`/static/${fileName}@2x.${ext} 2x`}
      {...props}
    />
  )
}
