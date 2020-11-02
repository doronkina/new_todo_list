import React, { useState } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Card, Row, Span, Button } from '@startupjs/ui'
import { faPencilAlt, faMinus } from '@fortawesome/free-solid-svg-icons'
import EditTaskModal from './Modals/EditTask'
import DeleteTaskModal from './Modals/DeleteTask'

export default observer(function Task ({ style, task, index }) {
    const [editTaskModal, setEditTaskModal] = useState(false)
    const [deleteTaskModal, setDeleteTaskModal] = useState(false)

    return pug`
        Card.task(variant='outlined')
            Row(align='between')
                Span #{task.text}
                Row
                    Button(variant='flat' size='s' icon=faPencilAlt onPress=() => setEditTaskModal(true))
                    Button.btn(variant='flat' size='s' icon=faMinus onPress=() => setDeleteTaskModal(true))
            EditTaskModal(visible=editTaskModal setVisible=setEditTaskModal task=task)
            DeleteTaskModal(visible=deleteTaskModal setVisible=setDeleteTaskModal task=task index=index)
    `
})