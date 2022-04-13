import { Request, Response } from 'express'
import { createErrorMessage } from '@/ports/express/helpers'
import * as DB from '@/ports/adapters/http/modules/orders'

export const getSingleOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const singleProduct = await DB.getSingleOrderInDB(id)

    if (singleProduct === null) {
      return res.status(404)
        .json(createErrorMessage('Pedido não encontrado!'))
    }

    return res.json(singleProduct)
  } catch (error) {
    console.log('Error: ', error)

    return res.status(400)
      .json(createErrorMessage('Erro ao procurar pedido.'))
  }
}
