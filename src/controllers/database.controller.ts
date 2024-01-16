import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './../database.service';

@Controller('db')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('hello')
  getHello(): Record<string, string> {
    return {
      controllerName: 'db',
      message: this.databaseService.getHello(),
    };
  }
}
