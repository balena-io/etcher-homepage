import React from 'react';
import Layout from './_Layout';
import locals from '../config/cache.json';
import Rationale from '../components/pro/Rationale';
import Nav from '../components/pro/Nav';
import Subscribe from '../components/pro/Subscribe';
import Description from '../components/pro/Description';
import Jumbotron from '../components/pro/Jumbotron';
import Features from '../components/pro/Features';
import Waypoint from 'react-waypoint';
import get from 'lodash/get'

const Content = ({ children, navHide, toggleNav }) => {
  return (
    <Layout {...locals}>
      <Nav hide={navHide}>
        <Subscribe action={locals.proMailChimpList} />
      </Nav>
      <Waypoint
        onLeave={() => toggleNav(false)}
        onEnter={() => toggleNav(true)}
        >
        <div>
          <Jumbotron mailChimpAction={locals.proMailChimpList} />
        </div>
      </Waypoint>
      {children}
    </Layout>
  )
}

class Page extends React.Component {
  constructor(props) {
    super()
    this.state = {
      navHide: true
    }
  }

  toggleNav = (newState) => {
    this.setState({
      navHide: newState
    })
  }

  render() {
    const variant = get(this.props, 'query.vn') || 'a'
    switch (variant) {
      case 'b':
        return (
          <Content navHide={this.state.navHide} toggleNav={this.toggleNav}>
            <Features cols={2} features={locals.proFeatures} />
            <Rationale />
          </Content>
        );
        break;
      case 'c':
        return (
          <Content navHide={this.state.navHide} toggleNav={this.toggleNav}>
            <Rationale />
          </Content>
        );
        break;
      default:
        return (
          <Content navHide={this.state.navHide} toggleNav={this.toggleNav}>
            <Description />
            <Features cols={2} features={locals.proFeatures} />
          </Content>
        );
    }

  }
};

Page.getInitialProps = ({ query }) => {
  return { query }
}

export default Page;
