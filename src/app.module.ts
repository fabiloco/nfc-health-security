import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { PersonModule } from './person/person.module';
import { NfcModule } from './nfc/nfc.module';
import { AllergyModule } from './allergy/allergy.module';

console.log(process.env.NODE_ENV);

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      // envFilePath: process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev',
      envFilePath: '.env',
      isGlobal: true,
    }),
    PersonModule,
    NfcModule,
    AllergyModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    AppService,
    PrismaService,
    UserService,
  ],
})
export class AppModule {}
