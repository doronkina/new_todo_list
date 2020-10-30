import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import './index.styl'
import { Board } from 'components'

export default observer(function PBoard () {
  return pug`
    ScrollView.root
      Board
  `
})
