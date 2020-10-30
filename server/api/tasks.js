export default async (req, res) => {
    const { model } = req
    const boards = model.query('boards', { user_id: model.get()._session.userId })
    await model.fetch(boards)
    const tasks = model.query('tasks', { board_id: { $in: boards.get().map(x => x.id) } })
    await model.subscribe(tasks)
    res.json({ name: 'tasks', tasks: tasks.get() })
}