import { PartialType } from '@nestjs/mapped-types';

import { IsNotEmpty, IsString } from 'class-validator';

import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  dni: string;
}
