import { Router } from 'express'
import * as E from './modules'
const routes = Router()

routes.get('/product/:id', E.getSingleProduct)
routes.get('/products', E.getAllProducts)
routes.get('/products/category', E.getAllProductsCategory)
routes.get('/products/price', E.getAllProductsPrice)
routes.get('/products/title', E.getAllProductsTitle)
routes.get('/products/description', E.getAllProductsDescription)

routes.get('/order/:id', E.getSingleOrder)

export default routes
