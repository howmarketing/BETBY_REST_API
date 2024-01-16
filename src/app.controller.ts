import { Controller, Get } from '@nestjs/common';
//import { DatabaseService as AppService } from './database.service';
import { DatabaseService } from './database.service';
import { AppService } from './app.service';

@Controller('apps')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get('hello')
  getHello(): { message: string } {
    return {
      message: this.databaseService.getHello(),
    };
  }
}
