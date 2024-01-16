import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('hello')
  getHello(): { message: string; moduleName: string } {
    return {
      moduleName: 'Database',
      message: this.databaseService.getHello(),
    };
  }
}
