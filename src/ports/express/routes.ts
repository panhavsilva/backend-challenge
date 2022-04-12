import { Router } from 'express'
import {
  getSingleProduct,
  getAllProductsCategory,
  getAllProducts,
  getAllProductsPrice,
  getAllProductsTitle,
  getAllProductsDescription,
} from './modules'
const routes = Router()

routes.get('/product/:id', getSingleProduct)
routes.get('/products', getAllProducts)
routes.get('/products/category', getAllProductsCategory)
routes.get('/products/price', getAllProductsPrice)
routes.get('/products/title', getAllProductsTitle)
routes.get('/products/description', getAllProductsDescription)

export default routes
