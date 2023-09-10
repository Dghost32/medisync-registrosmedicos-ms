import { Router } from 'express'
import { medicalRecordRules } from '../../rules/medicalRecord.rules'
import { create } from './request-methods/create'
import { get, getAll, getMany } from './request-methods/get'
import { update } from './request-methods/update'
import { deleteOne } from './request-methods/delete'

const medicalRecordRouter = Router()

// Create
medicalRecordRouter.post("/create", medicalRecordRules.create, create)

// Read 
medicalRecordRouter.get(`/get/:id`, medicalRecordRules.get, get)
medicalRecordRouter.post(`/getMany`, medicalRecordRules.getMany, getMany)
medicalRecordRouter.get(`/getAll`, getAll)

// Update
medicalRecordRouter.put("/update/:id", medicalRecordRules.update, update)

// Delete
medicalRecordRouter.delete("/delete/:id", medicalRecordRules.delete, deleteOne)

export { medicalRecordRouter }

