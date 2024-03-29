import { NextFunction, Request, Response } from 'express';

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const rightEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  // Regex retirado de: https://www.regular-expressions.info/email.html

  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!rightEmail.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  return next();
};

export default validateEmail;
