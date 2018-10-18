const Image = ({ src, retina, ...props }) => {
  const fileName = src.split('.');
  const ext = fileName.pop();
  return (
    <img
      alt={`${fileName}`}
      src={`/etcher/static/${src}`}
      srcSet={retina ? `/etcher/static/${fileName}@2x.${ext} 2x` : ''}
      {...props}
    />
  );
};

Image.defaultProps = {
  retina: true
};

export default Image;
