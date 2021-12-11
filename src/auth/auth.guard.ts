import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

// guard는 함수인데 request를 다음 단계로 진행할지 말지 결정한다.
//CanActivate는 함수인데 true를 리턴하면 request를 진핼시키고 false면 request를 멈추게한다
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const user = gqlContext['user'];
    if (!user) {
      return false;
    }
    return true;
  }
}
