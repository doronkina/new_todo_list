import React from 'react'
import { observer, useModel, useDoc } from 'startupjs'
import './index.styl'
import { Modal, Span } from '@startupjs/ui'

export default observer(function DeleteColumn ({ style, visible, setVisible, column, index, tasks }) {
    const $columns = useModel('columns')
    const [, $board] = useDoc('boards', column.board_id)

    const closeModal = () => {
        setVisible(false)
    }

    const deleteColumn = () => {
        if (tasks.length) return

        $columns.deleteColumn(column.id)
        $board.deleteColumn(index)
        closeModal()
    }

    return pug`
        Modal(
            title='Delete column'
            visible=visible
            confirmLabel='Delete'
            onCrossPress=closeModal
            onConfirm=deleteColumn
            onBackdropPress=closeModal
        ) 
            Span Delete this column?
    `
})