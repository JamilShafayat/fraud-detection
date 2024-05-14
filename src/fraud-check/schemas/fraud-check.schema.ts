import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

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


  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user: User;
}

export const FraudCheckSchema = SchemaFactory.createForClass(FraudCheck)