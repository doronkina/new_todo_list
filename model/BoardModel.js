import { BaseModel } from 'startupjs/orm'

export default class BoardModel extends BaseModel {
    async addNewColumn (columnTitle) {
        await this.push('columns', columnTitle)
    }

    async deleteColumn (index) {
        await this.remove('columns', index)
    }
}