import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'authLogin';

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '2d',
};

function userToken(data: object): string {
  return jwt.sign({ data }, secret, JWT_CONFIG);
}

function verifyToken(tokenL: string) {
  const reverse = jwt.verify(tokenL, secret);
  return reverse;
}
export {
  userToken,
  verifyToken,
};
