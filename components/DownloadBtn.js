import React, { PropTypes, Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Router from 'next/router';
import Sniffr from 'sniffr';
import reject from 'lodash/reject';
import includes from 'lodash/includes';

export default class DownloadBtn extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      link: props.downloads.links[0],
      links: reject(props.downloads.links, props.downloads.links[0])
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    // TODO run tests with .arch detection and see if it's accurate.
    if (this.props.downloads.links === 0) return;
    const client = new Sniffr();
    client.sniff(window.navigator.userAgent);
    if (client.os.name === 'macos') {
      client.os.name = 'OS X';
    }
    const links = this.props.downloads.links;
    const link = links.find((l) => {
      return l.release.text.indexOf(client.os.name) > -1;
    })
    if (link) {
      this.setState({
        link : link,
        links: reject(links, link),
      })
    }
  }

  render() {
    const { downloads, ...props } = this.props;
    const { isOpen, link, links } = this.state;
    return (
      <ButtonDropdown isOpen={isOpen} toggle={this.toggle} {...props}>
        <Button
          id="caret"
          color="primary"
          href={ link.release.href }
          onClick={() => {
            this.context.tracker.create('download', link );
          }}
        >
          {`Download ${link.release.text.split(' ').slice(1,4).join(' ')}`}
        </Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          {
            links.length > 0 && links.map((l, index) => {
              return (
                <DropdownItem
                  onClick={() => {
                    this.context.tracker.create('download', l );
                  }}
                  href={ l.release.href }
                  id={ index }
                  key={ index }
                  tag='a'
                  >
                    { l.release.text }
                </DropdownItem>
              )
            })
          }
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

DownloadBtn.contextTypes = {
  tracker: React.PropTypes.object
};
