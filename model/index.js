import BoardModel from './BoardModel'
import BoardsModel from './BoardsModel'
import TaskModel from './TaskModel'
import TasksModel from './TasksModel'

export default function (racer) {
    racer.orm('boards.*', BoardModel)
    racer.orm('boards', BoardsModel)
    racer.orm('tasks.*', TaskModel)
    racer.orm('tasks', TasksModel)
}
