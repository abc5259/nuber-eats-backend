import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.interfaces';
import { CONFIG_OPTIONS } from './jwt.constants';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS)
    private readonly options: JwtModuleOptions,
  ) {
    console.log(this.options);
  }
  hello() {
    console.log('Hello');
  }
}
