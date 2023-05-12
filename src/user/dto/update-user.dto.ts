import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { Role } from 'src/auth/role.enum';

const updateUserSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
  role: z.nativeEnum(Role).optional(),
});

// class is required for using DTO as a type
export class UpdateUserDto extends createZodDto(updateUserSchema) {}
