import { Navbar, Nav, NavItem } from 'reactstrap';
import Image from '../Image';

export default ({ children }) =>
  <Navbar className="flex-row align-items-center bg-white py-3 pro-nav">
    <Nav className="mr-auto" navbar>
      <NavItem>
        <Image src="pro/logo-nav.svg" retina={false} />
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <NavItem>
        {children}
      </NavItem>
    </Nav>
  </Navbar>;
