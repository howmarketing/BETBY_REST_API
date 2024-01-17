import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { DatabaseService as AppService } from './database.service';
import { DatabaseService } from './database.service';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DatabaseService, AppService, PrismaService],
})
export class AppModule {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  public getPrismaService(): PrismaService {
    return this.prismaService;
  }

  @Get()
  getHello(): string {
    return `Module says: ${this.appService.getHello()}`;
  }
}
