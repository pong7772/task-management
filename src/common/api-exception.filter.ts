import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch(HttpException)
export class ApiExceptionFilter implements ExceptionFilter {
  //   constructor(private logger: Logger) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus();

    // this.logger.error(
    //   `Error: ${JSON.stringify(exception.getResponse())}`,
    //   status,
    //   exception.stack,
    // );
    const errorDetail = exception.getResponse();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: errorDetail,
      // add this line to include the error message
      message: exception.message || null,
    });
  }
}
