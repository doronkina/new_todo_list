import React, {useState} from 'react'
import { observer, useLocal, useModel } from 'startupjs'
import './index.styl'
import { Modal, TextInput } from '@startupjs/ui'

export default observer(function AddTask ({ style, visible, setVisible, status }) {
    const [taskText, setTaskText] = useState('')
    const [boardId] = useLocal('$render.params.boardId')
    const $tasks = useModel('tasks')

    const closeModal = () => {
        setVisible(false)
        setTaskText('')
    }
    
    const addNewTask = () => {
        $tasks.addNewTask(boardId, status, taskText)
        closeModal()
    }

    return pug`
        Modal(
            title='Add new task'
            visible=visible
            confirmLabel='Add'
            onCrossPress=closeModal
            onConfirm=addNewTask
            onBackdropPress=closeModal
        )
            TextInput(
                placeholder='New task text'
                value=taskText
                onChangeText=setTaskText
            )
    `
})