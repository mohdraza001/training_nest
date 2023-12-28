import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
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
  @Delete("/")
  DeleteHello(): string {
    return this.appService.DeleteHello();
  }
  @Put("/")
  PutHello(): string {
    return this.appService.PutHello();
  }
}
