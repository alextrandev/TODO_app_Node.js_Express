import express from 'express';
import db from '../db.js';

const router = express.Router();

// get all todos
router.get('/', (req, res) => {
  const getTotos = db.prepare('SELECT * FROM todos WHERE user_id = ?');
  const todos = getTotos.all(req.userId);
  res.json(todos);
});

// add new todo task
router.post('/', async (req, res) => {
  const { body: {task: task}, userId } = req;

  const insertTodo = db.prepare(`
    INSERT INTO todos (task, user_id)
    VALUES (?, ?)
  `);
  const result = insertTodo.run(task, userId);

  if (result.changes === 0) {
    return res.status(500).json({ error: 'Failed to add new todo' });
  }

  return res.json({
    id: result.lastInsertRowid,
    task,
    completed: false
  });
});

router.put('/:id', async (req, res) => {
  // update todo task
});

router.delete('/:id', async (req, res) => {
  // delete todo task
});

export default router;