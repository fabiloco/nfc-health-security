import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './jwt.constants';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles.guard';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
    }),
    JwtModule.register({
      secret: JwtConstants().secret,
      signOptions: { expiresIn: '20h' },
      global: true,
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UserService, JwtStrategy, RolesGuard],
})
export class AuthModule {}
