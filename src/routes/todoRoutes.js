import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  // show the todo list
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