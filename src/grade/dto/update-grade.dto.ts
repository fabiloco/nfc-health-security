import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const updateGradeSchema = z.object({
  assignmentName: z.string().optional(),
  grade: z.number().optional(),
  Class: z.number().optional(),
  person: z.number().optional(),
});

export class UpdateGradeDto extends createZodDto(updateGradeSchema) {}
