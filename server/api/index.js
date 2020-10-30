import express from 'express'
import boards from './boards'
import tasks from './tasks'

const router = express.Router()

// All API routes are automatically prefixed with /api (see server/index.js file)

router.get('/boards', boards)
router.get('/tasks', tasks)

// Add new REST API routes here

export default router
