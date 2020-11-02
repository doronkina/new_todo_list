import { BaseModel } from 'startupjs/orm'

export default class BoardModel extends BaseModel {
    async addNewColumn (columnId) {
        console.log(columnId)
        await this.push('columns', columnId)
    }

    async deleteColumn (index) {
        await this.remove('columns', index)
    }
}