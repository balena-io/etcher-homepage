import React from 'react';
import Link from 'next/link';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { isExternal } from '../lib/utils';

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
                const EXTERNAL = isExternal(pages[p]);
                return (
                  <NavItem key={p} className="px-1">
                    <Link
                      prefetch={!EXTERNAL}
                      href={`${!EXTERNAL ? locals.prefix : '' }${pages[p]}`}
                    >
                      <a>{p}</a>
                    </Link>
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

Footer.contextTypes = {
  locals: React.PropTypes.object
};

export default Footer;
