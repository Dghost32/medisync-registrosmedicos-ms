import { PrismaClient, MedicalRecord } from '@prisma/client';

const { medicalRecord } = new PrismaClient();

export const create = async (payload: MedicalRecord): Promise<MedicalRecord | null> => {
  try {
    let record = await medicalRecord.create({ data: payload });
    return record;
  } catch (e) {
    return null;
  }
}
