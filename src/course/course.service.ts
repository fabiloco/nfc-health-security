import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    const { courseName, instructor } = createCourseDto;

    return await this.prisma.course.create({
      data: {
        courseName,
        instructor,
      },
    });
  }

  async findAll() {
    return await this.prisma.course.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.course.findFirst({ where: { id } });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const { courseName, instructor } = updateCourseDto;
    return await this.prisma.course.update({
      where: { id },
      data: {
        instructor,
        courseName,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.course.delete({ where: { id } });
  }
}
