import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
// import { z } from 'zod';

import { person_sex, person_marital_status } from '@prisma/client';

const updatePersonSchema = z.object({
  dni: z.string().optional(),
  name: z.string().optional(),
  lastname: z.string().nullish().optional(),
  phone: z.string().nullish().optional(),
  ocupation: z.string().nullish().optional(),
  sex: z.nativeEnum(person_sex).nullish().optional(),
  marital_status: z.nativeEnum(person_marital_status).nullish().optional(),
  address: z.string().nullish().optional(),
  blood_type: z.string().nullish().optional(),
  height: z.string().nullish().optional(),
  religion: z.string().nullish().optional(),
  education: z.string().nullish().optional(),
  sisben: z.string().nullish().optional(),
  estrato: z.string().nullish().optional(),
  birthday: z.dateString().nullish().optional(),
  user_id: z.number().int().optional(),

  classes: z.array(z.number()).optional(),
  grades: z.array(z.number()).optional(),
});

// class is required for using DTO as a type
export class UpdatePersonDto extends createZodDto(updatePersonSchema) {}
