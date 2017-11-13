import Section from '../Section';
import Grid from '../Grid';
import Feature from '../Feature';

export default ({ features, title = 'Features', cols = 4 }) =>
  <Section title={title} className="bg-primary text-white py-5">
    <Grid
      cols={cols}
      className="bg-primary text-white"
      Component={Feature}
      items={features}
    />
  </Section>;
