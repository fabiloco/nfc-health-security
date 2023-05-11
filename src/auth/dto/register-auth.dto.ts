import { createZodDto } from 'nestjs-zod';

import { z } from 'zod';

const registerSchema = z.object({
  name: z.string(),
  dni: z.string(),
  password: z.string(),
  email: z.string(),
});

// class is required for using DTO as a type
export class RegisterAuthDto extends createZodDto(registerSchema) {}
