import express from 'express';
import db from '../db.js';
import prisma from '../prismaClient.js';

const router = express.Router();

// get all todos
router.get('/', async (req, res) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: req.userId
    }
  })

  res.json(todos);
});

// add new todo task
router.post('/', async (req, res) => {
  const { body: {task: task}, userId } = req;

  const newTodo = await prisma.todo.create({
    data: {
      task: task,
      userId: userId
    }
  });

  if (!newTodo) {
    return res.status(500).json({ error: 'Failed to add new todo' });
  }

  return res.json({
    id: newTodo.id,
    task,
    completed: newTodo.completed
  });
});

// update todo task
router.put('/:id', async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  const { userId } = req;

  const updatedTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
      userId: userId
    },
    data: {
      completed: !!completed // convert to boolean
    }
  });

  if (!updatedTodo) {
    return res.status(500).json({ error: 'Failed to update todo' });
  }

  return res.json({ id: id, completed: !!completed });
});

// delete todo task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  const deleteTodo = await prisma.todo.delete({
    where: {
      id: parseInt(id),
      userId: userId
    }
  });

  if (!deleteTodo) {
    return res.status(500).json({ error: 'Failed to delete todo' });
  }

  return res.json({ id: id });
});

export default router;