import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! s';
  }
  patchHello(): string {
    return 'Hello World! patch';
  }
  DeleteHello(): string {
    return 'Hello World! delete';
  }
  PutHello(): string {
    return 'Hello World! put';
  }
}
