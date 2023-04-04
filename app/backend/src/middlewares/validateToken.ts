import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../authFunctions/authFunction';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization') as string;

  if (!token) res.status(401).json({ message: 'Token not found' });

  try {
    const validate = verifyToken(token);
    req.body.logged = validate;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

// Função desenvolvida com base na mentoria 9.4 JWT com Typescript e com a ajuda do Breno Lavalle;

export default validateToken;
