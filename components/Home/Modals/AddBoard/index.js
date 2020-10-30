import React, {useState} from 'react'
import { observer, useSession, useModel } from 'startupjs'
import './index.styl'
import { Modal, TextInput, Span } from '@startupjs/ui'

export default observer(function AddBoard ({ style, visible, setVisible, boards }) {
    const [boardTitle, setBoardTitle] = useState('')
    const [titleUsed, setTitleUsed] = useState(false)
    const [userId] = useSession('userId')
    const $boards = useModel('boards')

    const closeModal = () => {
        setVisible(false)
        setTitleUsed(false)
        setBoardTitle('')
    }
    
    const addNewBoard = () => {
        if ( boards.includes(boardTitle) ) {
            setTitleUsed(true)
            return
        }

        $boards.addNewBoard(userId, boardTitle)
        closeModal()
    }

    return pug`
        Modal(
            title='Add new board'
            visible=visible
            confirmLabel='Add'
            onCrossPress=closeModal
            onConfirm=addNewBoard
            onBackdropPress=closeModal
        )
            TextInput(
                placeholder='New board title'
                value=boardTitle
                onChangeText=setBoardTitle
                onFocus=() => setTitleUsed(false)
            )
            if titleUsed
                Span.error '#{boardTitle}' board already exist
    `
})