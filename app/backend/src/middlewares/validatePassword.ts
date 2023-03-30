import { NextFunction, Request, Response } from 'express';

const validatePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (!password) {
    return res.status(400).json({ message: 'All the fields must be filled' });
  }

  return next();
};

export default validatePassword;
