import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async create(createClassDto: CreateClassDto) {
    const { location, duration, date, course, person } = createClassDto;

    return await this.prisma.class.create({
      data: {
        location,
        course: {
          connect: {
            id: course,
          },
        },
        date,
        duration,
        person: {
          connect: { id: person },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.class.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.class.findFirst({ where: { id } });
  }

  async update(id: number, updateAllergyDto: UpdateClassDto) {
    const { location, duration, date, course, person } = updateAllergyDto;
    return await this.prisma.class.update({
      where: { id },
      data: {
        location,
        course: {
          connect: {
            id: course,
          },
        },
        date,
        duration,
        person: {
          connect: { id: person },
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.class.delete({ where: { id } });
  }
}
