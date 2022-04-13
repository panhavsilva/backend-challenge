import { prisma } from '@/ports/prisma'

export const getSingleProductInDB = async (id: string | undefined) => {
  const singleProduct = await prisma.products.findUnique({
    where: { id },
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      image: true,
    },
  })

  return singleProduct
}

export const getAllProductsInDB = async (page: number) => {
  const take = 5
  const skip = (page - 1) * take
  const products = await prisma.products.findMany({
    take,
    skip,
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      image: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

  return products
}

export const getAllProductsCategoryInDB = async (filter: string, page: number) => {
  const take = 5
  const skip = (page - 1) * take
  const products = await prisma.products.findMany({
    take,
    skip,
    where: {
      category: filter,
    },
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      image: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

  return products
}

export const getAllProductsPriceInDB = async (filter: number, page: number) => {
  const take = 5
  const skip = (page - 1) * take
  const products = await prisma.products.findMany({
    take,
    skip,
    where: {
      price: filter,
    },
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      image: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

  return products
}

export const getAllProductsTitleInDb = async (filter: string, page: number) => {
  const take = 5
  const skip = (page - 1) * take
  const products = await prisma.products.findMany({
    take,
    skip,
    where: {
      title: {
        contains: filter,
      },
    },
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      image: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

  return products
}

export const getAllProductsDescriptionInDB = async (filter: string, page: number) => {
  const take = 5
  const skip = (page - 1) * take
  const products = await prisma.products.findMany({
    take,
    skip,
    where: {
      description: {
        contains: filter,
      },
    },
    select: {
      title: true,
      price: true,
      description: true,
      category: true,
      image: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

  return products
}
