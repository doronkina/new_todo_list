import React, {useState} from 'react'
import { observer, useModel, useDoc } from 'startupjs'
import './index.styl'
import { Modal, TextInput } from '@startupjs/ui'

export default observer(function AddTask ({ style, visible, setVisible, columnId }) {
    const [taskText, setTaskText] = useState('')
    const $tasks = useModel('tasks')
    const [, $column] = useDoc('columns', columnId)

    const closeModal = () => {
        setVisible(false)
        setTaskText('')
    }
    
    const addNewTask = async () => {
        const taskId = await $tasks.addNewTask(columnId, taskText)
        console.log(taskId)
        $column.addNewTask(taskId)
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