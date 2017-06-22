import React from 'react';
import Image from './Image';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import renderLink from './Link';
import Link from 'next/link';

export default class Navigation extends React.Component {
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
      <Navbar {...rest} toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <Link prefetch href="/"><a>{ this.brand(brand, title) }</a></Link>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto py-2" navbar>
            {Object.keys(pages).map((p) => {
              return (
                <NavItem key={p} className="px-1">
                  {renderLink(pages, p)}
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Navigation.contextTypes = {
  locals: React.PropTypes.object
};
