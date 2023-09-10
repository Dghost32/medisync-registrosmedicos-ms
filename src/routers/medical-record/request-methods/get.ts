import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { MedicalRecord } from '@prisma/client'
import { IResponse } from '../../../types/requests'
import { medicalRecordService } from '../../../services/medical-record/medicalRecord.service'

export const get = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const payload = { id }
  const errors = validationResult(payload)

  const response: IResponse<MedicalRecord | undefined> = {
    success: false,
    data: undefined,
  }

  if (!errors.isEmpty()) {
    response.error = errors.array()[0].msg;
    return res.status(400).json(response)
  }

  const record = await medicalRecordService.get(payload.id)

  if (!record) {
    response.error = "Record could not be found"
    return res.status(404).json(response)
  }

  response.success = true
  response.data = record

  return res.status(201).json(response)
}

export const getMany = async (req: Request, res: Response) => {
  const ids = req.body.ids
  const payload = { ids }
  const errors = validationResult(payload)

  const response: IResponse<MedicalRecord[] | undefined> = {
    success: false,
    data: undefined,
  }

  if (!errors.isEmpty()) {
    response.error = errors.array()[0].msg;
    return res.status(400).json(response)
  }

  const records = await medicalRecordService.getMany(payload.ids)

  if (!records?.length) {
    response.error = "Records could not be found"
    return res.status(404).json(response)
  }

  response.success = true
  response.data = records

  return res.status(201).json(response)
}

export const getAll = async (_: Request, res: Response) => {
  const response: IResponse<MedicalRecord[] | undefined> = {
    success: false,
    data: undefined,
  }

  const records = await medicalRecordService.getAll()

  if (!records?.length) {
    response.error = "There are no records"
    return res.status(404).json(response)
  }

  response.success = true
  response.data = records

  return res.status(201).json(response)
}
