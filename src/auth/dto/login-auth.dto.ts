import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const loginSchema = z.object({
  password: z.string(),
  email: z.string(),
});

// class is required for using DTO as a type
export class LoginAuthDto extends createZodDto(loginSchema) {}
