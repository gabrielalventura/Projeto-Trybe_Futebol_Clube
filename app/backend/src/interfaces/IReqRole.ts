import { Request } from 'express';

interface IReqRole extends Request {
  email?: string,
}

export default IReqRole;
