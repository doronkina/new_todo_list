import React, {useState} from 'react'
import { observer, useLocal, useDoc } from 'startupjs'
import './index.styl'
import { Modal, TextInput, Span } from '@startupjs/ui'

export default observer(function AddColumn ({ style, visible, setVisible, columns }) {
    const [columnTitle, setColumnTitle] = useState('')
    const [titleUsed, setTitleUsed] = useState(false)
    const [boardId] = useLocal('$render.params.boardId')
    const [, $board] = useDoc('boards', boardId)

    const closeModal = () => {
        setVisible(false)
        setTitleUsed(false)
        setColumnTitle('')
    }
    
    const addNewColumn = () => {
        if ( columns.includes(columnTitle) ) {
            setTitleUsed(true)
            return
        }

        $board.addNewColumn(columnTitle)
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
                onFocus=() => setTitleUsed(false)
            )
            if titleUsed
                Span.error '#{columnTitle}' column already exist
    `
})