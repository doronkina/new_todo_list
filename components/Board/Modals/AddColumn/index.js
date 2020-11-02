import React, {useState} from 'react'
import { observer, useLocal, useModel, useDoc } from 'startupjs'
import './index.styl'
import { Modal, TextInput } from '@startupjs/ui'

export default observer(function AddColumn ({ style, visible, setVisible }) {
    const [columnTitle, setColumnTitle] = useState('')
    const [boardId] = useLocal('$render.params.boardId')
    const $columns = useModel('columns')
    const [, $board] = useDoc('boards', boardId)

    const closeModal = () => {
        setVisible(false)
        setColumnTitle('')
    }
    
    const addNewColumn = async () => {
        const columnId = await $columns.addNewColumn(boardId, columnTitle)
        $board.addNewColumn(columnId)
        closeModal()
    }

    return pug`
        Modal(
            title='Add new column'
            visible=visible
            confirmLabel='Add'
            onCrossPress=closeModal
            onConfirm=addNewColumn
            onBackdropPress=closeModal
        )
            TextInput(
                placeholder='New column title'
                value=columnTitle
                onChangeText=setColumnTitle
            )
    `
})