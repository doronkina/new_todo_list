export default async (req, res) => {
    const { model } = req
    const boards = model.query('boards', { user_id: model.get()._session.userId})
    await model.subscribe(boards)
    res.json({ name: 'boards', boards: boards.get() })
}