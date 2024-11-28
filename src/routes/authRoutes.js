import express from 'express';
import bcrypts from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  // register as new user
});

router.post('/login', async (req, res) => {
  // login as existing user
});

export default router;