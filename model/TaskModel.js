import { BaseModel } from 'startupjs/orm'

export default class TaskModel extends BaseModel {
    async deleteTask () {
        await this.root.del('tasks.' + this.getId())
    }

    async editTask (text) {
        await this.set('text', text)
    }
}