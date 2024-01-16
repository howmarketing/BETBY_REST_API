import { Get, Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

@Module({
  imports: [],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  getHello(): string {
    return `Module Database says: ${this.databaseService.getHello()}`;
  }
}
