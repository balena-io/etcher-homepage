/* eslint-disable */

import { Component } from 'react';
import {
  InputGroup,
  InputGroupButton,
  Input,
  Button,
  FormGroup,
  Form,
  Col,
  Label
} from 'reactstrap';
import jsonp from 'jsonp';
import FaCheck from 'react-icons/lib/fa/check';
import withTrack from '../../lib/withTrack';
const getAjaxUrl = url => url.replace('/post?', '/post-json?');

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: null,
      email: '',
      msg: ''
    };
  }

  // eslint-disable-next-line
  submit(e) {
    e.preventDefault();

    const url =
      getAjaxUrl(this.props.action) +
      `&EMAIL=${encodeURIComponent(this.state.email)}`;

    jsonp(
      url,
      {
        param: 'c'
      },
      (err, data) => {
        setTimeout(() => {
          // reset after request
          this.setState({
            valid: null,
            msg: ''
          });
        }, 4000);

        if (err) {
          return this.setState({
            valid: false,
            msg: err.message
          });
        }

        if (data.result === 'error') {
          return this.setState({
            valid: false,
            msg: data.msg
          });
        }

        // everything succeeded
        this.setState({
          valid: true
        });
        // track signup
        this.props.track('proSubscribe', {
          email: this.state.email
        });
      }
    );
  }

  renderButton(valid) {
    switch (valid) {
      case true:
        return (
          <Button color="success">
            <FaCheck />
          </Button>
        );
      default:
        return 'Subscribe';
    }
  }

  render() {
    return (
      <Form onSubmit={e => this.submit(e)}>
        <FormGroup className="mb-0">
          {
            // eslint ignore nextLine
          }
          {this.state.msg
            ? <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: this.state.msg }}
              />
            : <div className="d-flex align-items-center">
                <p
                  className="text-muted mr-2 mb-0 hidden-sm-down"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Want to get updates?
                </p>
                <InputGroup>
                  <Input
                    className="subscribe__input p-3"
                    type="email"
                    id="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={evt => {
                      this.setState({ email: evt.target.value });
                    }}
                  />
                  <InputGroupButton color="primary">
                    {this.renderButton(this.state.valid)}
                  </InputGroupButton>
                </InputGroup>
              </div>}
        </FormGroup>
      </Form>
    );
  }
}

export default withTrack(Subscribe);
