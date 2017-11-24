import { Component } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

import Sniffr from 'sniffr';
import sortBy from 'lodash/sortBy';
import arch from 'arch';
import withTrack from '../lib/withTrack';

class DownloadBtn extends Component {
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
    client.os.arch = arch();

    const links = this.props.downloads;

    // give points for not matching
    const score = (condition, p) => (!condition ? p : 0);

    const sortedLinks = sortBy(links, l => {
      let linkScore = score(
        l.os.toLowerCase() === client.os.name.toLowerCase(),
        2
      );
      if (linkScore === 0) {
        linkScore = linkScore + (l.arch === client.os.arch, 1);
      }

      return linkScore;
    });

    this.setState({
      link: sortedLinks[0],
      links: sortedLinks.splice(1)
    });
  }

  render() {
    const { track, ...props } = this.props;
    const { isOpen, link, links } = this.state;
    return (
      <ButtonDropdown isOpen={isOpen} toggle={this.toggle} {...props}>
        <Button
          id="caret"
          color="primary"
          href={link.href}
          onClick={() => {
            track('download', link);
          }}
        >
          {`Download ${link.text.split(' ').slice(1, 4).join(' ')}`}
        </Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          {links.length > 0 &&
            links.map((l, index) => {
              return (
                <DropdownItem
                  onClick={() => {
                    track('download', l);
                  }}
                  href={l.href}
                  id={index}
                  key={index}
                  tag="a"
                >
                  {l.text}
                </DropdownItem>
              );
            })}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default withTrack(DownloadBtn);
