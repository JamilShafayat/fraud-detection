import { Module } from '@nestjs/common';
import { FraudCheckController } from './fraud-check.controller';
import { FraudCheckService } from './fraud-check.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FraudCheckSchema } from './schemas/fraud-check.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{name: 'FraudCheck', schema: FraudCheckSchema}])
  ],
  controllers: [FraudCheckController],
  providers: [FraudCheckService]
})

export class FraudCheckModule {}
