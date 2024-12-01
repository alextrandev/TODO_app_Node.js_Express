import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/', (req, res) => {
  const getTotos = db.prepare('SELECT * FROM todos WHERE user_id = ?');
  const todos = getTotos.all(req.userId);
  res.json(todos);
});

router.post('/', async (req, res) => {
  // add new todo task
});

router.put('/:id', async (req, res) => {
  // update todo task
});

router.delete('/:id', async (req, res) => {
  // delete todo task
});

export default router;