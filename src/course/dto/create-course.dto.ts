import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const createCourseSchema = z.object({
  courseName: z.string(),
  instructor: z.string(),
});

export class CreateCourseDto extends createZodDto(createCourseSchema) {}
