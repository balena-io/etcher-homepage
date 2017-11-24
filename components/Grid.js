export default ({ items, Component, cols = 3, ...props }) => {
  return (
    <div {...props}>
      <div className="container">
        <div className="row">
          {items.map((item, i) => {
            return (
              <div key={i} className={`col-md-${12 / cols}`}>
                <Component {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
