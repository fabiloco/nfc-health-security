import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async findByUserId(userId: string) {
    const person = await this.prisma.person.findFirst({
      where: { user: { id: Number(userId) } },
      include: {
        appointments: true,
        contacts: true,
        allergies: true,
        conditions: true,
        medications: true,
      },
    });

    if (!person) {
      throw new HttpException(
        'No person with such user id',
        HttpStatus.NOT_FOUND,
      );
    }
    return person;
  }

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
      allergies,
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
        allergies: {
          set: allergies?.map((allergyId) => ({ id: allergyId })),
        },
      },
      include: {
        appointments: true,
        contacts: true,
        allergies: true,
        conditions: true,
        medications: true,
      },
    });

    return person;
  }
}
