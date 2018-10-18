import React from 'react'
import Doc from '../components/Doc'
import { getSiteProps } from '@resin.io/react-static'

export default getSiteProps(props => {
  return <Doc {...props.changelog} />
})
