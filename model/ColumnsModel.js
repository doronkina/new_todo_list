import { BaseModel } from 'startupjs/orm'

export default class ColumnsModel extends BaseModel {
    async addNewColumn (board_id, title) {
        const column = {
            id: this.root.id(),
            board_id,
            title,
            tasks: []
        }

        await this.root.add(this.getCollection(), column)

        return column.id
    }

    async deleteColumn (id) {
        this.root.del('columns.' + id)
    }

    async reorderTasks (columnId, newTasksOrder) {
        this.scope('columns.' + columnId).set('tasks', newTasksOrder)
    }

    async resetTask (startColumnId, finishColumnId, newStartTasksOrder, newFinishTasksOrder) {
        this.scope('columns.' + startColumnId).set('tasks', newStartTasksOrder)
        this.scope('columns.' + finishColumnId).set('tasks', newFinishTasksOrder)
    }
}