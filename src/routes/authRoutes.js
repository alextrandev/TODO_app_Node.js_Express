import express from 'express';
import bcrypts from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// register as new user
router.post('/register', async (req, res) => {
  const {username, password} = req.body;

  // save to db
  try {
    // hash the password
    const hashedPassword = bcrypts.hashSync(password, 8);
    console.log(username, hashedPassword);
    res.sendStatus(201);
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