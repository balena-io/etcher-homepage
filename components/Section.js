export default ({ children, title, ...props }) => {
  return (
    <section {...props}>
      <div className="container">
        <h2 className="text-center mb-5">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
