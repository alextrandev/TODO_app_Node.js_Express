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
      task, // same as task: task
      userId
    }
  });
  // not sure if this works... maybe refactor and use try catch instead
  if (!newTodo) {
    return res.status(500).json({ error: 'Failed to add new todo' });
  }

  return res.json(newTodo);
});

// update todo task
router.put('/:id', async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  const { userId } = req;

  const updatedTodo = await prisma.todo.update({
    where: {
      id: parseInt(id), // because params are strings
      userId
    },
    data: {
      completed: !!completed // convert to boolean
    }
  });

  if (!updatedTodo) {
    return res.status(500).json({ error: 'Failed to update todo' });
  }

  return res.json(updatedTodo);
});

// delete todo task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  await prisma.todo.delete({
    where: {
      id: parseInt(id),
      userId
    }
  });

  return res.json({ id });
});

export default router;