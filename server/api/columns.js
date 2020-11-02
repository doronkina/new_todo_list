export default async (req, res) => {
    const { model } = req
    const boards = model.query('boards', { user_id: model.get()._session.userId })
    await model.fetch(boards)
    const columns = model.query('columns', { board_id: { $in: boards.get().map(board => board.id) } })
    await model.subscribe(columns)
    res.json({ name: 'columns', columns: columns.get() })
}