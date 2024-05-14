import { Prop } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import { IsEmpty } from 'class-validator';

export class CreateFraudCheckDto {
  readonly title: string;
  readonly cardNumber: string;
  readonly destination: string;

  @IsEmpty()
  readonly fraud: boolean;

  @IsEmpty({ message: "You cannot pass user id"})
  readonly user: User;
}