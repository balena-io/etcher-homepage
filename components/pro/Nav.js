import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import Image from '../Image'
import Subscribe from './Subscribe'
import locals from '../../config/cache.json'
import Headroom from 'react-headroom'

export default ({ children }) =>
  <Headroom wrapperStyle={{
    position: 'absolute',
    top: '-100%'
  }}>
    <Navbar className="flex-row align-items-center bg-white py-3">
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
  </Headroom>
