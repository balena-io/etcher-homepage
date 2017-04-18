import React from 'react';
import Link from 'next/link';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
                  <Link prefetch href={pages[p]}><a>{p}</a></Link>
                </NavItem>
              ))}
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
