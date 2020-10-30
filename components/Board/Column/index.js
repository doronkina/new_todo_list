import React, { useState } from 'react'
import { observer, useLocal, useQuery } from 'startupjs'
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
    const [boardId] = useLocal('$render.params.boardId')
    const [tasks] = useQuery('tasks', {board_id: boardId, status: column})

    return pug`
        Div.container(styleName={first: index === 0})
            Row.header(align='between')
                Span.columnTitle #{column}
                Button(variant='flat' size='l' icon=faMinus onPress=()=> setDeleteColumnModal(true))
            Collapse(title=tasks.length + ' items' open=openTasks onChange=() => setOpenTasks(!openTasks))
                each task in tasks
                    if task.status === column
                        Task(key=task.id task=task)
            Div.footer
                Button(variant='flat' size='l' onPress=()=> setAddTaskModal(true)) Add new task
            AddTaskModal(visible=addTaskModal setVisible=setAddTaskModal status=column)
            DeleteColumnModal(visible=deleteColumnModal setVisible=setDeleteColumnModal tasks=tasks index=index)
    `
})