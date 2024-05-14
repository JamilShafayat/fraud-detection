import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FraudCheckService } from './fraud-check.service';
import { FraudCheck } from './schemas/fraud-check.schema';
import { AuthGuard } from '@nestjs/passport';
import { CreateFraudCheckDto } from './dto/create-fraud-check.dto';

@Controller('fraud-check')
export class FraudCheckController {
  constructor(private fraudCheckService: FraudCheckService) {}

  @Get()
  async getAllFraudChecks(): Promise<FraudCheck[]>{
    return this.fraudCheckService.findAll()
  }

  @Post()
  @UseGuards(AuthGuard())
  async createFraudCheck(
    @Body()
    fraudCheck: CreateFraudCheckDto,
    @Req() req
  ): Promise<FraudCheck> {
    return this.fraudCheckService.create(fraudCheck, req.user)
  }
}
