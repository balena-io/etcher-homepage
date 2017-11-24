import { Row, Col } from 'reactstrap';
import Section from '../Section';

export default () =>
  <Section className="text-muted text-center py-5" title="Description">
    <Row>
      <Col md={{ size: 8, push: 2 }}>
        <h5 className="mb-4">
          Etcher Pro is the next stage in Etcher’s journey, and an expansion of
          Etcher’s vision and focus
        </h5>
        <p>
          Etcher is already the best and fastest way for writing to disk images,
          in fact it’s currently writing 500,000 SD Cards & USB Drives per
          month! Now, we are working on a way for you to write to more devices,
          with the same ease of use and streamlined interface you have come to
          expect from Etcher, and completely independent from your computer.
        </p>
        <p>
          Etcher Pro is a stand-alone hardware device that allows you to write
          to multiple cards or usb disks at once, at extreme speeds. Compared to
          a traditional Disk Duplicator, Etcher Pro is faster and less
          expensive, while at the same time easier to use and packed with
          features, so that you can do much more than just copy SD Cards.
        </p>
      </Col>
    </Row>
  </Section>;
