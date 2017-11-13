export default ({ story }) => {
  return (
    <div className="row">
      {story.map((item, i) => {
        return (
          <div key={i} className={`col-md-${12 / story.length}`}>
            <p dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        );
      })}
    </div>
  );
};
