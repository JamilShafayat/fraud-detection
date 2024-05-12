import { Prop } from '@nestjs/mongoose';

export class CreateFraudCheckDto {
  readonly title: string;
  readonly cardNumber: string;
  readonly destination: string;
  readonly fraud: boolean;
}