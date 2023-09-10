import { create } from './crud/create.service';
import { get, getMany, getAll } from './crud/get.service';
import { update } from './crud/update.service';
import { deleteOne } from './crud/delete.service';

export const medicalRecordService = {
  get,
  getMany,
  getAll,
  create,
  update,
  delete: deleteOne
}
