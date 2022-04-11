import express, { Response, Request, Router } from 'express'
import cors from 'cors'
const routes = Router()

routes.get('/', function (_req: Request, res: Response) {
  return res.render('hello')
})

const app = express()
const PORT = 'PORT'
const CORS_ORIGINS = 'CORS_ORIGINS'
const corsOptions = {
  origin: process.env[CORS_ORIGINS],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSucessStatus: 204,
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors(corsOptions))
app.use(routes)

export function start () {
  return new Promise((resolve) => {
    app.listen(process.env[PORT], () => {
      console.log('Server is running...')
      resolve(null)
    })
  })
}
