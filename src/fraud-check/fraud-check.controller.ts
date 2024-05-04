import { Body, Controller, Get, Post } from '@nestjs/common';
import { FraudCheckService } from './fraud-check.service';
import { FraudCheck } from './schemas/fraud-check.schema';

@Controller('fraud-check')
export class FraudCheckController {
  constructor(private fraudCheckService: FraudCheckService) {}

  @Get()
  async getAllFraudChecks(): Promise<FraudCheck[]>{
    return this.fraudCheckService.findAll()
  }

  @Post()
  async createFraudCheck(
    @Body()
    fraudCheck
  ): Promise<FraudCheck> {
    return this.fraudCheckService.create(fraudCheck)
  }
}
