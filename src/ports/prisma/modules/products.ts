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

export const getAllProductsInDB = async () => {
  const products = await prisma.products.findMany({
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

export const getAllProductsCategoryInDB = async (filter: string) => {
  const products = await prisma.products.findMany({
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

export const getAllProductsPriceInDB = async (filter: number) => {
  const products = await prisma.products.findMany({
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

export const getAllProductsTitleInDb = async (filter: string) => {
  const products = await prisma.products.findMany({
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

export const getAllProductsDescriptionInDB = async (filter: string) => {
  const products = await prisma.products.findMany({
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
