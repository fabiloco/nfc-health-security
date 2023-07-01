import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const readNfcSchema = z.object({
  nfc_payload: z.number(),
  nfc_uid: z.string(),
});

// class is required for using DTO as a type
export class ReadNfcDto extends createZodDto(readNfcSchema) {}
