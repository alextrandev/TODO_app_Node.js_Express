import express from 'express';
import bcrypts from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// register as new user
router.post('/register', async (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  res.sendStatus(201);
});

// login as existing user
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  res.sendStatus(200);
});

export default router;