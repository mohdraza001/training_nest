import { Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("/")
  create(): string {
    return 'This action adds a new cat';
  }
  @Patch("/")
  patchHello(): string {
    return this.appService.patchHello();
  }
}
