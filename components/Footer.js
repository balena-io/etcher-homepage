import React from 'react';
import Link from 'next/link';
import { Nav, NavItem, NavLink } from 'reactstrap';
import renderLink from './Link';

const Footer = ({ pages, children, ...props }, { locals }) => {
  return(
    <footer  { ...props }>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {children}
          </div>
          <div className="col-md-4">
            <Nav vertical>
              {Object.keys(pages).map((p) => {
                return (
                  <NavItem key={p} className="px-1">
                    {renderLink(pages, p)}
                  </NavItem>
                )
              })}
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
