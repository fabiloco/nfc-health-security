import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';

import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userObject: RegisterAuthDto) {
    return await this.authService.register(userObject);
  }

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return await this.authService.login(loginAuthDto);
  }
}
