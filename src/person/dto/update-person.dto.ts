import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
// import { z } from 'zod';

import { person_sex, person_marital_status, appointment } from '@prisma/client';

const urgency = z.object({});

const appointment = z.object({
  city: z.string().optional(),
  reason: z.string().optional(),
  address: z.string().optional(),
  hospital: z.string().optional(),
  severity: z.string().optional(),
  start_day: z.dateString(),
  description: z.string().optional(),
});

const doctor = z.object({
  professional_license: z.string().optional(),
  recidency_hospital: z.string().optional(),
  specialty: z.string().optional(),
  citas_doctor: z.array(appointment).optional(),
  doctor_urgency: z.array(urgency).optional(),
});

const contact = z.object({
  person_id: z.number().optional(),
});

const condition = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  diagnosis_date: z.dateString().optional(),
});

const updateMedication = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  dosage: z.string().optional(),
  reason: z.string().optional(),
  frecuency: z.string().optional(),
  end_date: z.dateString().optional(),
  start_date: z.dateString().optional(),
});

const createMedication = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  dosage: z.string().optional(),
  reason: z.string().optional(),
  frecuency: z.string().optional(),
  end_date: z.dateString().optional(),
  start_date: z.dateString().optional(),
});

const updatePersonSchema = z.object({
  dni: z.string().optional(),
  name: z.string().optional(),
  lastname: z.string().nullish().optional(),
  phone: z.string().nullish().optional(),
  ocupation: z.string().nullish().optional(),
  sex: z.nativeEnum(person_sex).nullish().optional(),
  marital_status: z.nativeEnum(person_marital_status).nullish().optional(),
  address: z.string().nullish().optional(),
  blood_type: z.string().nullish().optional(),
  height: z.string().nullish().optional(),
  religion: z.string().nullish().optional(),
  education: z.string().nullish().optional(),
  sisben: z.string().nullish().optional(),
  estrato: z.string().nullish().optional(),
  birthday: z.dateString().nullish().optional(),
  user_id: z.number().int().optional(),

  appointments: z.array(z.number()).optional(),
  contacts: z.array(contact).optional(),
  allergies: z.array(z.number()).optional(),
  conditions: z.array(z.number()).optional(),
  medications: z.array(z.number()).optional(),
});

// class is required for using DTO as a type
export class UpdatePersonDto extends createZodDto(updatePersonSchema) {}
