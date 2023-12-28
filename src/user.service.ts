import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getHello(): string {
    return 'Hello World! user';
  }
  patchHello(): string {
    return 'Hello World! patch user';
  }
  DeleteHello(): string {
    return 'Hello World! delete user';
  }
  PutHello(): string {
    return 'Hello World! put user';
  }
}
