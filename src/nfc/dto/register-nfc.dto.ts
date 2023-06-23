import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const registerNfcSchema = z.object({
  nfc_uid: z.string(),
  blockchain_hash: z.string(),
});

// class is required for using DTO as a type
export class RegisterNfcDto extends createZodDto(registerNfcSchema) {}
