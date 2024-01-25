import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}

  async create(createGradeDto: CreateGradeDto) {
    const { assignmentName, grade, Class, person } = createGradeDto;

    return await this.prisma.grade.create({
      data: {
        assignmentName,
        grade,
        class: {
          connect: {
            id: Class,
          },
        },
        person: {
          connect: {
            id: person,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.grade.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.grade.findFirst({ where: { id } });
  }

  async update(id: number, updateGradeDto: UpdateGradeDto) {
    const { assignmentName, grade, Class, person } = updateGradeDto;
    return await this.prisma.grade.update({
      where: { id },
      data: {
        assignmentName,
        grade,
        class: {
          connect: {
            id: Class,
          },
        },
        person: {
          connect: {
            id: person,
          },
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.grade.delete({ where: { id } });
  }
}
