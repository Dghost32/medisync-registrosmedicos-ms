import { check } from "express-validator";

export const medicalRecordRules = {
  get: [
    check('id').isInt(),
  ],
  getMany: [
    check('ids').isArray(),
  ],
  create: [
    check('detail').isString(),
  ],
  update: [
    check('id').isInt(),
    check('detail').isString(),
  ],
  delete: [
    check('id').isInt(),
  ],
};
