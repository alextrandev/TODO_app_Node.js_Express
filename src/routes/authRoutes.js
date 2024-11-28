import express from 'express';
import bcrypts from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// register as new user
router.post('/register', async (req, res) => {
  const {username, password} = req.body;
  // hash the password
  const hashedPassword = bcrypts.hashSync(password, 8);

  // save to db
  try {
    const insertUser = db.prepare(`
      INSERT INTO users (username, password)
      VALUES (?, ?)
    `);
    const result = insertUser.run(username, hashedPassword);

    // add a default todo task
    const defaultTodo = "Add your first todo task!";
    const insertTodo = db.prepare(`
      INSERT INTO todos (task, user_id)
      VALUES (?, ?)
    `);
    insertTodo.run(defaultTodo, result.lastInsertRowid);

    // create a token
    const token = jwt.sign(
      { id: result.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
    );
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(503);
  }
});

// login as existing user
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  res.sendStatus(200);
});

export default router;