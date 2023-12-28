import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { userService } from './user.service';

@Controller("/user")
export class userController {
  constructor(private readonly userService: userService) {}

  @Get("/")
  getHello(): string {
    return this.userService.getHello();
  }
  @Post("/")
  create(): string {
    return 'This action adds a new cat';
  }
  @Patch("/")
  patchHello(): string {
    return this.userService.patchHello();
  }
  @Delete("/")
  DeleteHello(): string {
    return this.userService.DeleteHello();
  }
  @Put("/")
  PutHello(): string {
    return this.userService.PutHello();
  }
}
