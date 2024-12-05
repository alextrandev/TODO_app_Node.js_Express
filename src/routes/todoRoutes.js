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

// update todo task
router.put('/:id', (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  const { userId } = req;

  const updatedTodo = db.prepare(`UPDATE todos SET completed = ? WHERE id = ?`);

  // sqlite error if use the TRUE/FALSE value directly
  const result = updatedTodo.run(completed ? 1 : 0, id);

  if (result.changes === 0) {
    return res.status(500).json({ error: 'Failed to update todo' });
  }

  return res.json({ id, completed: completed });
});

// delete todo task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  const deleteTodo = db.prepare(`DELETE FROM todos WHERE id = ? AND user_id = ?`);

  const result = deleteTodo.run(id, userId);

  if (result.changes === 0) {
    return res.status(500).json({ error: 'Failed to delete todo' });
  }

  return res.json({ id });
});

export default router;