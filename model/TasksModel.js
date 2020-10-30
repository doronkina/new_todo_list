import { BaseModel } from 'startupjs/orm'

export default class TasksModel extends BaseModel {
    async addNewTask (board_id, status, text) {
        await this.root.add(this.getCollection(), {
            id: this.root.id(),
            board_id,
            status,
            text
        })
    }
}