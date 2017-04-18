import React from 'react';
import Link from 'next/link';
import Image from './Image';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // TODO confusing func - improve readability
  brand(brand, title) {
    if (brand) {
      return (
        <Image
          style={{maxWidth:'120px'}}
          src={`${brand}`}
        />
      )
    } else {
      return title
    }
  }

  render() {
    const { brand, pages, title, ...rest } = this.props;
    return (
      <div>
        <Navbar {...rest} toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <Link prefetch href="/"><a>{ this.brand(brand, title) }</a></Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {Object.keys(pages).map((p) => (
                <NavItem key={p} className="px-1">
                  <Link prefetch href={pages[p]}><a>{p}</a></Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
