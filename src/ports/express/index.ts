import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 'PORT'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors())

export function start () {
  return new Promise((resolve) => {
    app.listen(process.env[PORT], () => {
      console.log('Server is running...')
      resolve(null)
    })
  })
}
