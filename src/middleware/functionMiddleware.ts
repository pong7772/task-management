import { NextFunction, Request, Response } from 'express';

export default function functionMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Request...');
  //   make some logic for the middleware
  next();
}
