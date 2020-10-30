import React, {useState} from 'react'
import { observer, useSession, useQuery } from 'startupjs'
import './index.styl'
import { Row, Link, Span, Div, Button } from '@startupjs/ui'
import AddBoardModal from './Modals/AddBoard'

export default observer(function Home ({ style }) {
    const [addBoardModal, setAddBoardModal] = useState(false)
    let [userId] = useSession('userId')
    const [boards] = useQuery('boards', {user_id: userId})

    return pug`
        Row.container(style=style wrap)
            each board in boards
                Link.board(key=board.id block to='/board/' + board.id)
                    Span.boardTitle #{board.title}
            Div.addBoard
                Button(variant='flat' size='xxl' onPress=()=> setAddBoardModal(true)) Add new board
            AddBoardModal(visible=addBoardModal setVisible=setAddBoardModal boards=boards.map(board => board.title))
    `
})