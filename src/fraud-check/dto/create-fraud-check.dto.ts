import { User } from '../../auth/schemas/user.schema';
import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateFraudCheckDto {
  readonly cc_num: number;
  readonly amt: number;
  readonly unix_time: number;
  readonly merch_lat: number;
  readonly merch_long: number;

  @IsEmpty()
  readonly isFraud: boolean;

  @IsEmpty({ message: "You cannot pass user id"})
  readonly user: User;
}