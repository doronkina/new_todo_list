import React, {useState} from 'react'
import { observer, useDoc } from 'startupjs'
import './index.styl'
import { Modal, TextInput } from '@startupjs/ui'

export default observer(function EditTask ({ style, visible, setVisible, task }) {
    const [taskText, setTaskText] = useState(task.text)
    const [, $task] = useDoc('tasks', task.id)

    const closeModal = () => {
        setVisible(false)
    }

    const editTask = () => {
        $task.editTask(taskText)
        closeModal()
    }

    return pug`
        Modal(
            title='Edit task'
            visible=visible
            confirmLabel='Edit'
            onCrossPress=closeModal
            onConfirm=editTask
            onBackdropPress=closeModal
        )
            TextInput(
                placeholder='Task text'
                value=taskText
                onChangeText=setTaskText
            )
    `
})