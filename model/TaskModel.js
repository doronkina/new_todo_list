import { BaseModel } from 'startupjs/orm'

export default class TaskModel extends BaseModel {
    async editTask (text) {
        await this.set('text', text)
    }
}