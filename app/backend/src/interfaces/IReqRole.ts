import { Request } from 'express';

interface IReqRole extends Request {
  user?: string,
  email?: string,
}

export default IReqRole;
