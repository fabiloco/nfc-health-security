import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { hash, compare } from 'bcrypt';

import { PrismaService } from 'src/prisma.service';

import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(userObject: RegisterAuthDto) {
    const userWithEmail = await this.prisma.user.findUnique({
      where: {
        email: userObject.email,
      },
    });

    if (userWithEmail) {
      throw new HttpException('Email already used', HttpStatus.FORBIDDEN);
    }

    const personWithDni = await this.prisma.person.findUnique({
      where: {
        dni: userObject.dni,
      },
    });

    if (personWithDni) {
      throw new HttpException('DNI already used', HttpStatus.FORBIDDEN);
    }

    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };

    return this.prisma.person.create({
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

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;

    const userWithEmail = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!userWithEmail) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(password, userWithEmail.password);

    if (!checkPassword) {
      throw new HttpException('Wrong password', HttpStatus.FORBIDDEN);
    }

    const payload = {
      id: userWithEmail.id,
    };

    const token = this.jwtService.sign(payload);

    const data = {
      user: {
        id: userWithEmail.id,
        email: userWithEmail.email,
        created_at: userWithEmail.created_at,
        updated_at: userWithEmail.updated_at,
      },
      token,
    };

    return data;
  }
}
