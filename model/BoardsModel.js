import { BaseModel } from 'startupjs/orm'

export default class BoardsModel extends BaseModel {
    async addNewBoard (user_id, title) {
        await this.root.add(this.getCollection(), {
            id: this.root.id(),
            user_id,
            title,
            columns: []
        })
    }
}