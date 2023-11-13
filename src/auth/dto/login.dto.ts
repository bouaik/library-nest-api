import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
