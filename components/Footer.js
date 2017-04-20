import React from 'react';
import Link from 'next/link';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { isExternal } from '../lib/utils';

export default ({ pages, children, ...props }) => {
  return(
    <footer  { ...props }>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {children}
          </div>
          <div className="col-md-4">
            <Nav vertical>
              {Object.keys(pages).map((p) => (
                <NavItem key={p} className="px-1">
                  <Link prefetch={isExternal(pages[p])} href={pages[p]}><a>{p}</a></Link>
                </NavItem>
              ))}
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
