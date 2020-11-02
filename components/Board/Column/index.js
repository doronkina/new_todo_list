import React, { useState } from 'react'
import { observer, useQueryIds } from 'startupjs'
import './index.styl'
import { Row, Div, Span, Collapse, Button } from '@startupjs/ui'
import Task from './Task'
import AddTaskModal from './Modals/AddTask'
import DeleteColumnModal from './Modals/DeleteColumn'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default observer(function Column ({ style, column, index }) {
    const [openTasks, setOpenTasks] = useState(false)
    const [addTaskModal, setAddTaskModal] = useState(false)
    const [deleteColumnModal, setDeleteColumnModal] = useState(false)
    const [tasks] = useQueryIds('tasks', column.tasks)

    return pug`
        Div.container(styleName={first: index === 0})
            Row.header(align='between')
                Span.columnTitle #{column.title}
                Button(variant='flat' size='l' icon=faMinus onPress=()=> setDeleteColumnModal(true))
            Collapse(title=tasks.length + ' items' open=openTasks onChange=() => setOpenTasks(!openTasks))
                each task, index in tasks
                    Task(key=task.id task=task index=index)
            Div.footer
                Button(variant='flat' size='l' onPress=()=> setAddTaskModal(true)) Add new task
            AddTaskModal(visible=addTaskModal setVisible=setAddTaskModal columnId=column.id)
            DeleteColumnModal(visible=deleteColumnModal setVisible=setDeleteColumnModal column=column index=index tasks=tasks)
    `
})