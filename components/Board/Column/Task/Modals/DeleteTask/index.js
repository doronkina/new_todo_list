import React from 'react'
import { observer, useModel, useDoc } from 'startupjs'
import './index.styl'
import { Modal, Span } from '@startupjs/ui'

export default observer(function DeleteTask ({ style, visible, setVisible, task, index }) {
    const $tasks = useModel('tasks')
    const [, $column] = useDoc('columns', task.column_id)

    const closeModal = () => {
        setVisible(false)
    }

    const deleteTask = () => {
        $tasks.deleteTask(task.id)
        $column.deleteTask(index)
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