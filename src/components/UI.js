import {
  bool,
  string,
  number,
  oneOf,
  oneOfType,
} from 'prop-types'
import {
  idx,
  px,
  color,
  darken,
  caps,
  align,
} from '../utils/util'
import { Flex, Box } from 'rebass'
import SelectBase from 'rebass'
import { createLibrary } from 'rebass'

const numberOrString = oneOfType([ number, string ])
const bold = props => idx('weights.1', props.theme)

const components = [
  {
    name: 'Card',
    type: 'div',
    props: {
      bg: 'white'
    },
    style: props => ({
      overflow: 'hidden',
      borderRadius: px(props.theme.radius)
    })
  },
]

const library = createLibrary(components)

export const {
  Card,
} = library

