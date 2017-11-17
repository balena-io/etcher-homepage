import { Row, Col } from 'reactstrap';
import Section from '../Section';
import Image from '../Image'

export default () =>
  <Section className="text-muted py-5" title="Story">
    <Row>
      <Col md={{ size: 8, push: 2 }}>
        <p>A few months ago, we started hearing that Etcher’s algorithms were so robust, that they could write files that professional duplicators were failing on. That was a surprise to us, so we started investigating the world of professional duplicators. We discovered devices that were expensive, bulky, heavy, hard to use, limited in functionality, and using outdated technology. Did we say they were expensive? The cheapest professional duplicators cost $85 per slot. So if you wanted a 15-drive duplicator, you’re looking at a $1300 purchase.
        </p>

        <p>
        We’re very passionate about writing to SD cards and USB sticks, and so we started seriously thinking about combining all the ease of use and robustness of Etcher with hand-picked hardware that would guarantee a perfect write every time. Could we do for duplicators what we did for sd card and usb stick writing software? The investigation revealed an opportunity to make something that was much better AND much cheaper. We feel we can  produce and sell a 15-drive duplicator for $800 or less. The fact that, if successful, the Etcher duplicator will allow us to fund Etcher development sustainably into the future, or even accelerate it, is just the cherry on top.
        </p>

        <p>
        So we’ve decided take the plunge! We are now building the first prototype of Etcher Pro, working with our hardware design partners in Italy, and we expect to have prototypes in our hands by the end of the year. Here’s what the design currently looks like:
        </p>

        <Image className='w-50 mb-3 mt-2'  src='pro/single.png' />
        <Image className='w-50 mb-3 mt-2'  src='pro/double.png' />

        <p>
          We’re also furiously working on developing the multi-write feature for Etcher, that will be available to all users, of course. Our prototypes confirm we can beat the speeds advertised by commercial duplicators, and we expect to keep improving on that. The next step will be to offer the first batch in a crowdfunding campaign, with great offers for the early bird supporters
        </p>

        <p>
          The development process so far has been full of exciting, fast paced developments, and the results so far have exceeded our expectations. If you want to keep up with our progress, sign up on our mailing list to receive weekly updates!
        </p>
      </Col>
    </Row>
  </Section>
