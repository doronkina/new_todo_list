import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import './index.styl'
import { Span } from '@startupjs/ui'
import { Home } from 'components'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Home
  `
})
