import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { FraudCheck } from './schemas/fraud-check.schema';
import { User } from '../auth/schemas/user.schema';

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

  async create(fraudCheck: FraudCheck, user: User): Promise<FraudCheck> {
    const data = Object.assign(fraudCheck, {user: user._id})
    return await this.fraudCheckModel.create(data);
  }
}
