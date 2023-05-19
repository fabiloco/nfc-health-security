import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const {
      dni,
      sex,
      name,
      phone,
      height,
      sisben,
      address,
      estrato,
      user_id,
      birthday,
      lastname,
      religion,
      education,
      ocupation,
      blood_type,
      marital_status,
    } = updatePersonDto;

    const personWithId = await this.prisma.person.findFirst({
      where: { user: { id: id } },
    });

    if (!personWithId) {
      throw new HttpException('Person not found', HttpStatus.NOT_FOUND);
    }

    const person = await this.prisma.person.update({
      where: { id: personWithId.id },
      data: {
        dni,
        sex,
        name,
        phone,
        height,
        sisben,
        address,
        estrato,
        user_id,
        birthday,
        lastname,
        religion,
        education,
        ocupation,
        blood_type,
        marital_status,
      },
    });
    return person;
  }
}
