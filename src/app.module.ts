import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { DatabaseService as AppService } from './database.service';
import { DatabaseService } from './database.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DatabaseService, AppService],
})
export class AppModule {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  getHello(): string {
    return `Module says: ${this.appService.getHello()}`;
  }
}
