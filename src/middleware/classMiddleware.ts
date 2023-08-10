import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class classMiddleware implements NestMiddleware {
  constructor(private logger: Logger) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { method, path: url } = req;
    const reqTime = new Date().getTime();
    res.on('finish', () => {
      const resTime = new Date().getTime();
      const { statusCode } = res;
      const logFormat = `Request original url: ${url} | Method: ${method} | Request time: ${reqTime}ms | Response time: ${resTime}ms`;
      if (statusCode === 200 || statusCode === 201) {
        this.logger.log(logFormat, 'info');
      } else {
        this.logger.error(logFormat);
      }
    });
    next();
  }
}
