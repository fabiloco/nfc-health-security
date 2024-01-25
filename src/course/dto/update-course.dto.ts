import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const updateCourseSchema = z.object({
  courseName: z.string().optional(),
  instructor: z.string().optional(),
});

export class UpdateCourseDto extends createZodDto(updateCourseSchema) {}
