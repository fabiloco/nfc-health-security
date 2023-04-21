import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

import { RegisterAuthDto } from './dto/register-auth.dto';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };

    this.prisma.person.create({
      data: {
        name: userObject.name,
        dni: userObject.dni,
        user: {
          create: {
            password: userObject.password,
            email: userObject.email,
          },
        },
      },
    });
  }
}
