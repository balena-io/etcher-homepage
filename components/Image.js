const Image = ({ src, retina, ...props }) => {
  const fileName = src.split('.');
  const ext = fileName.pop();
  return (
    <img
      alt={`${fileName}`}
      src={`/static/${src}`}
      srcSet={retina ? `/static/${fileName}@2x.${ext} 2x` : ''}
      {...props}
    />
  );
};

Image.defaultProps = {
  retina: true
};

export default Image;
