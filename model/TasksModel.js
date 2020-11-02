import { BaseModel } from 'startupjs/orm'

export default class TasksModel extends BaseModel {
    async addNewTask (column_id, text) {
        const task = {
            id: this.root.id(),
            column_id,
            text
        }
        
        await this.root.add(this.getCollection(), task)

        return task.id
    }

    async deleteTask (id) {
        await this.root.del('tasks.' + id)
    }
}