import { Router } from 'express'
import { getSingleProduct } from './modules'
const routes = Router()

routes.get('/products/:id', getSingleProduct)

export default routes
