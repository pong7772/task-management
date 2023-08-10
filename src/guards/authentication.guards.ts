import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //    if we return true then the request will be processed
    //    if we return false then the request will be rejected
    //    if we return a promise then the request will be processed or rejected based on the promise result
    //    if we return an observable then the request will be processed or rejected based on the observable result
    // const request = context.switchToHttp().getRequest();
    console.log(context.switchToHttp().getRequest().headers);
    return true;
  }
}
