import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class CatsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const headers = request.headers;

    // ! remove console.log in class 'CatsGuard' later
    // TODO remove console.log in class 'CatsGuard' later
    // console.log({ headers });

    return true;
  }
}
