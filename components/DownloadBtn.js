import React, { PropTypes, Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Router from 'next/router';
import Sniffr from 'sniffr';
import sortBy from 'lodash/sortBy';
import arch from 'arch';

export default class DownloadBtn extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      link: props.downloads[0],
      links: props.downloads.slice(1)
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    // TODO run tests with .arch detection and see if it's accurate.
    if (this.props.downloads.length < 1) return;
    const client = new Sniffr();

    client.sniff(window.navigator.userAgent);
    client.os.arch = arch()
    if (client.os.name === 'macos') {
      client.os.name = 'os x';
    }

    const links = this.props.downloads;

    // give points for not matching
    const score = (i, p) => (i == -1 ? p : 0)

    const sortedLinks = sortBy(links, (l) => {
      const txt = l.text.toLowerCase();
      let linkScore = score(txt.indexOf(client.os.name), 2);

      if (linkScore === 0) {
        // if os.name match order by arch
        linkScore = linkScore + (score(txt.indexOf(client.os.arch), 1))
      }

      return linkScore
    })

    this.setState({
      link : sortedLinks[0],
      links: sortedLinks.splice(1),
    })
  }

  render() {
    const { downloads, ...props } = this.props;
    const { isOpen, link, links } = this.state;
    return (
      <ButtonDropdown isOpen={isOpen} toggle={this.toggle} {...props}>
        <Button
          id="caret"
          color="primary"
          href={ link.href }
          onClick={() => {
            this.context.tracker.create('download', link );
          }}
        >
          {`Download ${link.text.split(' ').slice(1,4).join(' ')}`}
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
                  href={ l.href }
                  id={ index }
                  key={ index }
                  tag='a'
                  >
                    { l.text }
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
