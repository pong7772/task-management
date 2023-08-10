import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
export class ApiError {
  constructor(
    public errorCode: number,
    public error: string,
    public data = null,
  ) {}
}

export default {
  INTERNAL_SERVER_ERROR: new InternalServerErrorException(
    new ApiError(1, 'Internal server error'),
  ),
  NOT_FOUND: new NotFoundException(new ApiError(2, 'Not Found')),
  INVALID_USERNAME_PASSWORD: new UnauthorizedException(
    new ApiError(3, 'Invalid username or password'),
  ),
  UNAUTHORIZED: new UnauthorizedException(
    new ApiError(4, 'Unauthorized, please login'),
  ),
  FORBIDDEN: new ForbiddenException(
    new ApiError(5, 'User does not have permission to access this api'),
  ),
  USER_DEACTIVATED: new ForbiddenException(
    new ApiError(6, 'User is deactived'),
  ),
  USERNAME_ALREADY_EXISED: new BadRequestException(
    new ApiError(7, 'Username is already existed'),
  ),
  EMAIL_ALREADY_REGISTED: new BadRequestException(
    new ApiError(
      8,
      'Email is already registerd, please use another email or reset your account password',
    ),
  ),
  NAME_EXISTED: new BadRequestException(
    new ApiError(9, 'Name already use, name must be unique'),
  ),
  QUIZ_EXISTED: new BadRequestException(
    new ApiError(10, 'Quiz already existed, please update the existing one'),
  ),
  NOT_FOUND_RELATION: new BadRequestException(
    new ApiError(11, 'Related entity not found'),
  ),
  RESET_PASSWORD_INVALID_OR_EXPIRED: new BadRequestException(
    new ApiError(
      12,
      'Your reset password request is invalid or expired, please try again',
    ),
  ),
  INVALID_OR_EXPIRED_REFRESH_TOKEN: new BadRequestException(
    new ApiError(
      13,
      'Your refresh token is invalid or expired, please try login again',
    ),
  ),
  QUIZ_ALREADY_COMPLETE: new BadRequestException(
    new ApiError(14, 'Quiz is already completed'),
  ),
  INVALID_DATA: new BadRequestException(
    new ApiError(15, 'Invalid data, please check you have input it correctly'),
  ),
  ALREADY_EXISTED: new BadRequestException(
    new ApiError(16, 'Data already exist, please check again'),
  ),
};
