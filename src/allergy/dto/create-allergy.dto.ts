import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const updateAllergySchema = z.object({
  name: z.string(),
  description: z.string(),
});

export class CreateAllergyDto extends createZodDto(updateAllergySchema) {}
