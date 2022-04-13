import { Request } from 'express'

export const isNumber = (req: Request) => {
  const query = 'filter'
  const filter = req.query[query]
  return Number(filter) > -1
}
