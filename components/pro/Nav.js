import { Navbar, Nav, NavItem } from 'reactstrap';
import Image from '../Image';

export default ({ children }) =>
  <Navbar className="flex-row align-items-center bg-white py-3 pro-nav">
    <Nav className="mr-auto hidden-sm-down" navbar>
      <NavItem>
        <Image src="pro/logo-nav.svg" retina={false} />
      </NavItem>
    </Nav>
    <Nav className="mx-auto ml-sm-auto mr-sm-0" navbar>
      <NavItem>
        {children}
      </NavItem>
    </Nav>
  </Navbar>;
