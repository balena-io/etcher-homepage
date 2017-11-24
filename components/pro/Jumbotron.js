import Image from '../Image';
import Subscribe from './Subscribe';

import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default ({ mailChimpAction }) =>
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
      <Row>
        <Col xs="auto" className="mx-auto">
          <p className="text-left text-muted pro-jumbotron__cta">
            Want to get updates?
          </p>
          <Subscribe action={mailChimpAction} />
        </Col>
      </Row>
    </Container>
  </Jumbotron>;
