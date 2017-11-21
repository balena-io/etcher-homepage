import React, { Component } from 'react'
import { InputGroup, InputGroupButton, Input, Button, FormGroup, Form, FormFeedback } from 'reactstrap';
import jsonp from 'jsonp'
import FaCheck from 'react-icons/lib/fa/check'
import FaExclamation from 'react-icons/lib/fa/exclamation'
import withTrack from '../../lib/withTrack'
const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: null,
      email: ''
    }
  }

  submit = (e) => {
    e.preventDefault()

    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.state.email)}`;
    jsonp(url, {
      param: 'c'
    }, (err, data) => {
      if (err) {
        return this.setState({
          valid: false
        })
      }
      if (data.result === "error") {
        return this.setState({
          valid: false
        })
      }
      this.setState({
        valid: true
      })
      this.props.track('proSubscribe', {
        email: this.state.email
      })
    })
  }

  renderButton = (valid, message) => {
    switch (valid) {
      case true:
        return <Button color="success"><FaCheck /></Button>
        break;
      case false:
        return <Button color="danger"><FaExclamation /></Button>
        break;
      default:
        return 'Subscribe'
    }
  }

  render() {
    return (
      <Form onSubmit={this.submit}>
        <FormGroup className="mb-0">
          <InputGroup className="z-0">
          <Input
            className="subscribe__input p-3"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(evt) => {
              this.setState({ email: evt.target.value })
            }}
            />
          <InputGroupButton color="primary">
            {this.renderButton(this.state.valid, this.state.message)}
          </InputGroupButton>
         </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default withTrack(Subscribe)
