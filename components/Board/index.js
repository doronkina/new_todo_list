import React, { useState } from 'react'
import { observer, useLocal, useDoc, useQueryIds, useModel } from 'startupjs'
import './index.styl'
import { Row, Div, Button } from '@startupjs/ui'
import Column from './Column'
import AddColumnModal from './Modals/AddColumn'
import { DragDropContext } from 'react-beautiful-dnd'

export default observer(function Board ({ style }) {
    const [addColumnModal, setAddColumnModal] = useState(false)
    const [boardId] = useLocal('$render.params.boardId')
    const [board] = useDoc('boards', boardId)
    const [columns] = useQueryIds('columns', board.columns)
    const $columns = useModel('columns')
    const $tasks = useModel('tasks')

    const onDragEnd = res => {
        const {source, destination, draggableId} = res

        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return

        const start = columns.find(column => column.id === source.droppableId)
        const finish = columns.find(column => column.id === destination.droppableId)

        if (start === finish) {
            const newTasksOrder = [...start.tasks]
            newTasksOrder.splice(source.index, 1)
            newTasksOrder.splice(destination.index, 0, draggableId)

            $columns.reorderTasks(start.id, newTasksOrder)

            return
        }

        const newStartTasksOrder = [...start.tasks]
        newStartTasksOrder.splice(source.index, 1)
        const newFinishTasksOrder = [...finish.tasks]
        newFinishTasksOrder.splice(destination.index, 0, draggableId)

        $columns.moveTask(start.id, finish.id, newStartTasksOrder, newFinishTasksOrder)
        $tasks.moveTask(draggableId, finish.id)
    }

    return pug`
        DragDropContext(onDragEnd=onDragEnd)
            Row.container(style=style)
                each column, index in columns
                    Column(key=column.id column=column index=index)
                Div.addColumn
                    Button(variant='flat' size='xxl' onPress=()=> setAddColumnModal(true)) Add new column
                AddColumnModal(visible=addColumnModal setVisible=setAddColumnModal)
    `
})