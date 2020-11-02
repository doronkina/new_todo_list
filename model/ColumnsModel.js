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
        await this.root.del('columns.' + id)
    }
}