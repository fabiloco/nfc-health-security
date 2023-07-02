import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { CreateAllergyDto } from './dto/create-allergy.dto';
import { UpdateAllergyDto } from './dto/update-allergy.dto';

@Injectable()
export class AllergyService {
  constructor(private prisma: PrismaService) {}

  async create(createAllergyDto: CreateAllergyDto) {
    const { name, description } = createAllergyDto;

    return await this.prisma.allergie.create({
      data: {
        name,
        description,
      },
    });
  }

  async findAll() {
    return await this.prisma.allergie.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.allergie.findFirst({ where: { id } });
  }

  async update(id: number, updateAllergyDto: UpdateAllergyDto) {
    const { name, description } = updateAllergyDto;
    return await this.prisma.allergie.update({
      where: { id },
      data: { name, description },
    });
  }

  async remove(id: number) {
    return await this.prisma.allergie.delete({ where: { id } });
  }
}
