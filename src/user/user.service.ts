import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, role } = createUserDto;

    const userWithEmail = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userWithEmail) {
      throw new HttpException('Email already used', HttpStatus.FORBIDDEN);
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        role,
        password,
      },
    });
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { email, password, role } = updateUserDto;

    const userWithId = await this.prisma.user.findUnique({ where: { id } });

    if (!userWithId) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const userWithEmail = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userWithEmail) {
      throw new HttpException('Email already used', HttpStatus.FORBIDDEN);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        email,
        role,
        password,
      },
    });
    return user;
  }

  async remove(id: number) {
    const userWithId = await this.prisma.user.findUnique({ where: { id } });

    if (!userWithId) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const user = await this.prisma.user.delete({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
