import { PrismaClient, MedicalRecord } from '@prisma/client';

const { medicalRecord } = new PrismaClient();

export const get = async (id: number): Promise<MedicalRecord | null> => {
  try {
    const record = await medicalRecord.findUnique({ where: { id } });
    return record;
  } catch (e) {
    return null;
  }
}

export const getMany = async (ids: number[]): Promise<MedicalRecord[]> => {
  try {
    const records = await medicalRecord.findMany({ where: { id: { in: ids } } });
    return records;
  } catch (e) {
    return [];
  }
}

export const getAll = async (): Promise<MedicalRecord[]> => {
  try {
    const records = await medicalRecord.findMany();
    return records;
  } catch (e) {
    return [];
  }
}
