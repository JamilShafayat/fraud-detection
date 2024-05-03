import { Controller, Get } from '@nestjs/common';
import { FraudCheckService } from './fraud-check.service';
import { FraudCheck } from './schemas/fraud-check.schema';

@Controller('fraud-check')
export class FraudCheckController {
  constructor(private fraudCheckService: FraudCheckService) {}

  @Get()
  async getAllBooks(): Promise<FraudCheck[]>{
    return this.fraudCheckService.findAll()
  }
}
