import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import Image from '../Image'
import Subscribe from './Subscribe'
import locals from '../../config/cache.json'
import Headroom from 'react-headroom'

export default ({ children }) =>
  <Navbar className={`flex-row align-items-center bg-white py-3 pro-nav`}>
    <Nav className="mr-auto" navbar>
      <NavItem>
        <Image src="pro/logo-nav.svg" retina={false}/>
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <NavItem>
        {children}
      </NavItem>
    </Nav>
  </Navbar>
