import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { FraudCheck } from './schemas/fraud-check.schema';

@Injectable()
export class FraudCheckService {
  constructor(
    @InjectModel(FraudCheck.name)
    private fraudCheckModel: mongoose.Model<FraudCheck>
  ) {
  }

  async findAll(): Promise<FraudCheck[]> {
    const fraudChecks = await this.fraudCheckModel.find();
    return fraudChecks;
  }
}
