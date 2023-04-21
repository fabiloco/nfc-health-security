import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userObject: RegisterAuthDto) {
    console.log({ userObject });
    return this.authService.register(userObject);
  }

  @Post()
  create(@Body() loginAuthDto: LoginAuthDto) {
    // return this.authService.create(loginAuthDto);
  }
}
