import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const updateClassSchema = z.object({
  date: z.dateString().optional(),
  location: z.string().optional(),
  duration: z.number().optional(),
  course: z.number().optional(),
  person: z.number().optional(),
});

export class UpdateClassDto extends createZodDto(updateClassSchema) {}
