import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { MedicalRecord } from '@prisma/client'
import { IResponse } from '../../../types/requests'
import { medicalRecordService } from '../../../services/medical-record/medicalRecord.service'

export const deleteOne = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const errors = validationResult({ id })

  const response: IResponse<MedicalRecord | undefined> = {
    success: false,
    data: undefined,
  }

  if (!errors.isEmpty()) {
    response.error = errors.array()[0].msg;
    return res.status(400).json(response)
  }

  const record = await medicalRecordService.delete(id)

  if (!record) {
    response.error = "Record could not be deleted"
    return res.status(404).json(response)
  }

  response.success = true
  response.data = record

  return res.status(201).json(response)
}
