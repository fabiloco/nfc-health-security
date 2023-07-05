import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const deleteNfcSchema = z.object({
  nfc_payload: z.number(),
  nfc_uid: z.string(),
});

// class is required for using DTO as a type
export class DeleteNfcDto extends createZodDto(deleteNfcSchema) {}
