import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const createClassSchema = z.object({
  date: z.dateString(),
  location: z.string(),
  duration: z.number(),
  course: z.number(),
  person: z.number(),
});

export class CreateClassDto extends createZodDto(createClassSchema) {}
