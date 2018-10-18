import styled, { withTheme } from 'styled-components'
import IconCaretDown from '../images/toggleDown.svg'
import IconCaretUp from '../images/toggleUp.svg'
import WhiteCaretUp from '../images/whiteCaretUp.svg'
import WhiteCaretDown from '../images/whiteCaretDown.svg'
import * as React from 'react'
import { Button, Divider, Fixed, Box, Flex, Image } from 'resin-components'
import theme from '../theme'
import { compose } from 'recompose'
const isArray = require('lodash/isArray')
import { space, color, fontSize, width } from 'styled-system'
//import Sniffr from 'sniffr';

const ToggleBase = styled(Button)`
  min-width: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -10px;
  border-left: 0;
  margin: 0;
  border-width: ${props => props.outline && '1px'};
  vertical-align: top;
  background-color: ${props => props.background}
  border-left: 1px solid transparent;
  border-top: 1px solid ${props => props.borderColor};
  border-bottom: 1px solid ${props => props.borderColor};
  border-right: 1px solid ${props => props.borderColor};
`

const ButtonBase = styled(Button)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  margin: 0;
  border-width: ${props => props.outline && '5px'};
  background-color: ${props => props.background}
  border-left: 1px solid ${props => props.borderColor};
  border-top: 1px solid ${props => props.borderColor};
  border-bottom: 1px solid ${props => props.borderColor};
  border-right: 1px solid transparent;
`

const MenuBase = styled.div`

  border-radius: 2px;
  box-shadow: -10px 9px 21px 0 rgba(152, 173, 227, 0.08);
  border: solid 1px #e8ebf2;
  background-color: #ffffff;
  color: #2a506f;

  background: white;
  white-space: nowrap;
  max-height: 280px;
  overflow-y: auto;
  padding: 28px 13px;
`

MenuBase.defaultProps = { theme }

const Wrapper = styled.div`
  display: inline-block;
  border-radius: 2px;
  vertical-align: top;
  position: relative;
`

const Item = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 16px;
  padding-right: 16px;
  border-top: ${props =>
    props.border && '1px solid ' + props.theme.colors.gray.main};
  border-radius: ${props => px(props.theme.radius)};
  &:hover {
    background: ${props => props.theme.colors.gray.light};
  }
`

Item.defaultProps = { theme }

const IconWrapper = styled.span`
  width: 28px;
`

const JoinedButton = styled(Button)`
  margin: 0;
`
const px = (n) => (typeof n === 'number' ? n + 'px' : n);

const Toggle = ({ open, handler, label, joined, whiteCaretStyle, ...props }) => {
  if (joined) {
    if (label) {
      return (
        <JoinedButton {...props} pl={16} pr={0} onClick={handler}>
          <Flex justify='space-between' align='center'>
            <Box mt='1px'>{label}</Box>
            {open ? <Image src={whiteCaretStyle ? WhiteCaretUp : IconCaretUp} /> : <Image src={whiteCaretStyle ? WhiteCaretDown : IconCaretDown} /> }
          </Flex>
        </JoinedButton>
      )
    }
    return (
      <JoinedButton {...props} square onClick={handler}>
        {open ? <Image src={whiteCaretStyle ? WhiteCaretUp : IconCaretUp} /> : <Image src={whiteCaretStyle ? WhiteCaretDown : IconCaretDown} />}
      </JoinedButton>
    )
  }
  return (
    <ToggleBase {...props} onClick={handler}>
      {open ? <Image src={whiteCaretStyle ? WhiteCaretUp : IconCaretUp} /> : <Image src={whiteCaretStyle ? WhiteCaretDown : IconCaretDown} />}
    </ToggleBase>
  )
}

class DropDownButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      minWidth: 0,
    }
  }


  toggle(e) {
    this.setState({
      open: !this.state.open,
      minWidth: this.base && this.base.offsetWidth
    })
  }

  render() {
    console.log('rendered')
    const {
      alignRight,
      children,
      border,
      joined,
      noListFormat,
      outline,
      tooltip,
      ...props
    } = this.props

    let label = this.props.label || 'Download'

/*    if (label === undefined) {
      if (Sniffr.os.name === 'MacOS') {
        label = 'Download for MacOS'
      }
      else if (Sniffr.os.name === 'Windows') {
        label = 'Download for Windows'
      }
      else if (Sniffr.os.name === 'Linux') {
        label = 'Download for Linux'
      }
      else {
        label = 'Download'
      }
    }
*/

    const dropdownContents = isArray(children) ? children : [children]

    return (
      <Wrapper {...props}>
        {joined ? (
          <Toggle
            {...props}
            tooltip={tooltip}
            outline={outline}
            joined={joined}
            label={label}
            handler={e => this.toggle(e)}
            open={this.state.open}
          />
        ) : (
            <span>
              <ButtonBase {...props} tooltip={tooltip} outline={outline}>
                {label}
              </ButtonBase>
              <Toggle
                {...props}
                outline={outline}
                handler={e => this.toggle(e)}
                open={this.state.open}
              />
            </span>
          )}
        {this.state.open && <Fixed onClick={e => this.toggle(e)} />}
        {this.state.open && (
          <MenuBase
            alignRight={alignRight}
            onClick={e => this.toggle(e)}
            minWidth={`${this.state.minWidth}px`}
          >
            {dropdownContents.map((child, i) => {
              if (noListFormat) {
                return child
              }
              if (!child) {
                return
              }
              if (child.type === Divider) {
                return child
              }
              return (
                <Item border={border && i} key={i}>
                  {child}
                </Item>
              )
            })}
          </MenuBase>
        )}
      </Wrapper>
    )
  }
}

export default compose(withTheme)(DropDownButton)