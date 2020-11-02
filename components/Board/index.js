import React, { useState } from 'react'
import { observer, useLocal, useDoc, useQueryIds } from 'startupjs'
import './index.styl'
import { Row, Div, Button } from '@startupjs/ui'
import Column from './Column'
import AddColumnModal from './Modals/AddColumn'

export default observer(function Board ({ style }) {
    const [addColumnModal, setAddColumnModal] = useState(false)
    const [boardId] = useLocal('$render.params.boardId')
    const [board] = useDoc('boards', boardId)
    const [columns] = useQueryIds('columns', board.columns)

    return pug`
        Row.container(style=style)
            each column, index in columns
                Column(key=column.id column=column index=index)
            Div.addColumn
                Button(variant='flat' size='xxl' onPress=()=> setAddColumnModal(true)) Add new column
            AddColumnModal(visible=addColumnModal setVisible=setAddColumnModal)
    `
})