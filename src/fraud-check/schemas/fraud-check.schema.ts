import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum CardType {
  CREDIT = 'Credit',
  DEBIT = 'Debit',
}

@Schema({
  timestamps: true
})
export class FraudCheck{
  @Prop()
  title: string;

  @Prop()
  cardNumber: string;

  @Prop()
  destination: string;

  @Prop()
  fraud: boolean;
}

export const FraudCheckSchema = SchemaFactory.createForClass(FraudCheck)