import { Request } from 'express'

export const isValidCategory = (req: Request) => {
  const query = 'filter'
  return req.query[query] === 'caneca' ||
    req.query[query] === 'adesivo' ||
    req.query[query] === 'camiseta'
}
