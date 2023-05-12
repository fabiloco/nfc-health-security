import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { Role } from 'src/auth/role.enum';

const createUserSchema = z.object({
  email: z.string(),
  password: z.string(),
  role: z.nativeEnum(Role),
});

// class is required for using DTO as a type
export class CreateUserDto extends createZodDto(createUserSchema) {}
