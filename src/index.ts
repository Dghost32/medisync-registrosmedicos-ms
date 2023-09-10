import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import { medicalRecordRouter } from './routers/medical-record/medicalRecord.router';

const app = express()
dotenv.config();

app.use(express.json())
app.use(cors({
  origin: ["*"],
}))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/medicalRecord', medicalRecordRouter)

const server = {
  run: () => app.listen(process.env.PORT, () =>
    console.log(`
🚀 Server ready at: http://localhost:${process.env.PORT}⭐️`),
  )
}

server.run();
