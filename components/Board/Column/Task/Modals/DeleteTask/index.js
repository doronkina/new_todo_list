import React from 'react'
import { observer, useDoc } from 'startupjs'
import './index.styl'
import { Modal, Span } from '@startupjs/ui'

export default observer(function DeleteTask ({ style, visible, setVisible, id }) {
    const [, $task] = useDoc('tasks', id)

    const closeModal = () => {
        setVisible(false)
    }

    const deleteTask = () => {
        $task.deleteTask(id)
        closeModal()
    }

    return pug`
        Modal(
            title='Delete task'
            visible=visible
            confirmLabel='Delete'
            onCrossPress=closeModal
            onConfirm=deleteTask
            onBackdropPress=closeModal
        )
            Span Delete this task?
    `
})