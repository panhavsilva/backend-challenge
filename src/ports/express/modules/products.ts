import { Request, Response } from 'express'
import { createErrorMessage } from '@/ports/express/helpers'
import * as DB from '@/ports/adapters/http/modules/products'
import { isValidCategory, isNumber } from '../helpers'

export const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const singleProduct = await DB.getSingleProductInDB(id)

    if (singleProduct === null) {
      return res.status(404)
        .json(createErrorMessage('Produto não encontrado!'))
    }

    return res.json(singleProduct)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao procurar produto.'))
  }
}
export const getAllProducts = async (req: Request, res: Response) => {
  const query = 'page'
  const page = Number(req.query[query])
  try {
    const products = await DB.getAllProductsInDB(page)

    if (products === null) {
      return res.status(404)
        .json(createErrorMessage('Erro ao buscar produtos.'))
    }

    return res.json(products)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao buscar produtos.'))
  }
}

export const getAllProductsCategory = async (req: Request, res: Response) => {
  const queryFilter = 'filter'
  const queryPage = 'page'
  const filter = String(req.query[queryFilter])
  const page = Number(req.query[queryPage])

  if (isValidCategory(req) === false) {
    return res.status(404)
      .json(createErrorMessage('Categoria invalida!'))
  }

  try {
    const products = await DB.getAllProductsCategoryInDB(filter, page)

    if (products === null) {
      return res.status(404)
        .json(createErrorMessage('Categoria invalida!'))
    }

    return res.json(products)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao buscar produtos por categoria.'))
  }
}

export const getAllProductsPrice = async (req: Request, res: Response) => {
  const queryFilter = 'filter'
  const queryPage = 'page'
  const filter = Number(req.query[queryFilter]) ?? 0
  const page = Number(req.query[queryPage])

  if (isNumber(req) === false) {
    return res.status(404)
      .json(createErrorMessage('Não é um preço valido'))
  }

  try {
    const products = await DB.getAllProductsPriceInDB(filter, page)

    if (products === null) {
      return res.status(404)
        .json(createErrorMessage('Não é um preço valido'))
    }

    return res.json(products)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao buscar produtos por preço.'))
  }
}

export const getAllProductsTitle = async (req: Request, res: Response) => {
  const queryFilter = 'filter'
  const queryPage = 'page'
  const filter = String(req.query[queryFilter])
  const page = Number(req.query[queryPage])

  try {
    const products = await DB.getAllProductsTitleInDb(filter, page)

    if (products === null) {
      return res.status(404)
        .json(createErrorMessage(`Nenhum produto encontrado com o titulo ${filter}!`))
    }

    return res.json(products)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao buscar produtos por titulo.'))
  }
}

export const getAllProductsDescription = async (req: Request, res: Response) => {
  const queryFilter = 'filter'
  const queryPage = 'page'
  const filter = String(req.query[queryFilter])
  const page = Number(req.query[queryPage])

  try {
    const products = await DB.getAllProductsDescriptionInDB(filter, page)

    if (products === null) {
      return res.status(404)
        .json(createErrorMessage(`Nenhum produto encontrado com a descrição ${filter}!`))
    }

    return res.json(products)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao buscar produtos por descrição.'))
  }
}
