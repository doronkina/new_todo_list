import { BaseModel } from 'startupjs/orm'

export default class ColumnModel extends BaseModel {
    async addNewTask (taskId) {
        await this.push('tasks', taskId)
    }

    async deleteTask (index) {
        await this.remove('tasks', index)
    }
}