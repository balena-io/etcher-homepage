import Image from '../Image';

import { Container, Jumbotron } from 'reactstrap';

export default () =>
  <Jumbotron className="text-center pro-jumbotron mb-0">
    <Container>
      <Image
        className="pro-jumbotron__logo mb-3"
        src="pro/logo.svg"
        retina={false}
      />
      <p className="pro-jumbotron__lead lead text-white mb-5">
        The Etcher you love, with the perfect hardware
      </p>
      <Image className="pro-jumbotron__product mb-3" src="pro/product.png" />
    </Container>
  </Jumbotron>;
