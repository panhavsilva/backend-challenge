import { Request, Response } from 'express'
import { createErrorMessage } from '@/ports/express/helpers'

import { prisma } from '@/ports/prisma'

export const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const singleProduct = await prisma.products.findUnique({
      where: { id },
    })

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
