import { PrismaClient, MedicalRecord } from '@prisma/client';

const { medicalRecord } = new PrismaClient();

export const update = async (id: number, payload: MedicalRecord): Promise<MedicalRecord | null> => {
  try {
    const record = await medicalRecord.update({ where: { id }, data: payload });
    return record;
  } catch (e) {
    return null;
  }
}
