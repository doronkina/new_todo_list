import React from 'react'
import { observer, useLocal, useDoc } from 'startupjs'
import './index.styl'
import { Modal, Span } from '@startupjs/ui'

export default observer(function DeleteColumn ({ style, visible, setVisible, tasks, index }) {
    const [boardId] = useLocal('$render.params.boardId')
    const [, $board] = useDoc('boards', boardId)

    const closeModal = () => {
        setVisible(false)
    }

    const deleteColumn = () => {
        if (tasks.length) return

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