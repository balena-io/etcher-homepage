import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Router from 'next/router';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      link: this.props.downloads.links[0],
      links: this.props.downloads.links
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <Button
          id="caret"
          color="primary"
          href={ this.state.link.release.href }
          onClick={() => {
            this.props.handler('[ etcher website ] download', this.state.link )
          }}
        >
          Download
        </Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          {
            this.state.links.length > 0 && this.state.links.map((link, index) => {
              return (
                <DropdownItem
                  onClick={() => {
                    window.location.href = this.state.release.href
                    this.props.handler('[ etcher website ] download', link )
                  }}
                  id={ index }
                  key={ index }
                  tag='a'
                  >
                    { link.release.text }
                </DropdownItem>
              )
            })
          }
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
