import express from 'express';
import { SignUpController } from './signup.controller';
const router = express.Router();

router.post(
  '/sign-up',
  SignUpController.createUser
);

export const SignUpRoutes = router;
