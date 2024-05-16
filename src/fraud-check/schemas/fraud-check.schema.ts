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
  // @Prop()
  // card_type: number;

  @Prop()
  cc_num: number;

  @Prop()
  amt: number;

  @Prop()
  unix_time: number;

  @Prop()
  merch_lat: number;

  @Prop()
  merch_long: number;

  @Prop()
  isFraud: boolean;


  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user: User;
}

export const FraudCheckSchema = SchemaFactory.createForClass(FraudCheck)