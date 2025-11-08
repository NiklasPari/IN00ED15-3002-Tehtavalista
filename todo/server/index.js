import express from 'express'
import cors from 'cors'
import { pool } from './helper/db.js'
import todoRouter from './routes/todoRouter.js'

const port = process.env.port || 3001
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', todoRouter)
app.listen(port)

app.use((err,req,res,next) => {
 const statusCode = err.status || 500
 res.status(statusCode).json({
 error: {
 message: err.message,
 status: statusCode
 }
 })
})