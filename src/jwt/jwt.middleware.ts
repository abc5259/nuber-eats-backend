import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

//implements는 해당 클래스가 interface로 행동하도록 한다.
// export class JwtMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(req.headers);
//     next();
//   }
// }

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
  next();
}
