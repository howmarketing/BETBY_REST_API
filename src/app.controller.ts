import {
  createParamDecorator,
  ExecutionContext,
  // Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { randomUUID } from 'crypto';

import { DatabaseService } from './database.service';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import {
  DTOGetBetByUserResponse,
  DTOGetBetByUserBody,
  DTOGetRecordsResponse,
} from './dtos';
import { DTOGetBetByUserBodyParams } from './api/DataTypes';

export const BodyDTO = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
  },
);
@Controller('apps')
export class AppController {
  private readonly select: { [x in keyof DTOGetBetByUserResponse]: true } = {
    id: true,
    userId: true,
    betId: true,
    name: true,
    lastName: true,
    email: true,
    username: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(
    private readonly prismaService: PrismaService,
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get('get-records')
  async getRecords(): Promise<DTOGetRecordsResponse> {
    const id = 1;
    const take: number = 1000;
    const data = await this.prismaService.betByUser.findMany({
      take,
      select: this.select,
      cursor: {
        id: id,
      },
      where: {
        id: {
          gte: id,
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
    const msg = `Success founded ${data.length} record${data.length > 1 ? 's' : ''}`;
    return {
      success: true,
      msg,
      response: {
        length: data.length,
        take,
        cursor: {
          id,
        },
        data: data.reverse(),
      },
    };
  }

  @Post('create-record')
  async createRecord(@BodyDTO() body: DTOGetBetByUserBodyParams) {
    const record = await this.recordData(body);
    return {
      success: true,
      msg: 'Success',
      response: {
        length: 1,
        take: 1,
        cursor: {
          id: record.id,
        },
        data: {
          input: body,
          output: record,
        },
      },
    };
  }

  async recordData(
    data: DTOGetBetByUserBodyParams,
  ): Promise<DTOGetBetByUserResponse> {
    const id = randomUUID();
    // const publicKey = `$501$3-02$404-${id}`;
    // const privateKey = `S0901E3544T32SRSTVP-${publicKey}`;
    const { betId, name, lastName, username, email, password } = data;
    const member = await this.prismaService.betByUser.create({
      select: this.select,
      data: {
        userId: id,
        betId,
        name,
        lastName,
        email,
        username,
        password,
        encrypt: `$501$3-02$404-${randomUUID()}`,
      },
    });
    return member;
  }
}
