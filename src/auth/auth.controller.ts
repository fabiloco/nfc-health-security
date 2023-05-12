import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Public } from './public.decorator';
import { Role } from './role.enum';
import { Roles } from './roles.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() userObject: RegisterAuthDto) {
    return await this.authService.register(userObject);
  }

  @Public()
  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return await this.authService.login(loginAuthDto);
  }

  @Get('test')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async test() {
    return 'protected route';
  }
}
