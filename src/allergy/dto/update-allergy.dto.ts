import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const updateAallergySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export class UpdateAllergyDto extends createZodDto(updateAallergySchema) {}
