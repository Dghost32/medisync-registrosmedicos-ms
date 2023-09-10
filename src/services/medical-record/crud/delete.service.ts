import { PrismaClient, MedicalRecord } from '@prisma/client';

const { medicalRecord } = new PrismaClient();

// delete is not allowed as a function name
export const deleteOne = async (id: number): Promise<MedicalRecord | null> => {
  try {
    const record = await medicalRecord.delete({ where: { id } });
    return record;
  } catch (e) {
    return null;
  }
}
