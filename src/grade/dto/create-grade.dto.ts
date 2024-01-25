import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const createGradeSchema = z.object({
  assignmentName: z.string(),
  grade: z.number(),
  Class: z.number(),
  person: z.number(),
});

export class CreateGradeDto extends createZodDto(createGradeSchema) {}
