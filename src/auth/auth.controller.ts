import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { AuthService } from './auth.service';

import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Role } from './role.enum';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

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

  @Get('test')
  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  async test() {
    return 'protected route';
  }
}
