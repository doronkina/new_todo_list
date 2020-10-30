import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Layout, Row, Link, H1 } from '@startupjs/ui'
import APP from '../../app.json'

const { displayName } = APP
const APP_TITLE = displayName.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join('')

export default observer(function ({ children }) {
  return pug`
    Layout
      Row.header
        Link(block to='/')
          H1.logo #{APP_TITLE}
      Div.body= children
  `
})
