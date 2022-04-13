import { prisma } from '@/ports/prisma'

export const getSingleOrderInDB = async (id: string | undefined) => {
  const singleOrder = await prisma.purchaseOrders.findUnique({
    where: { id },
    select: {
      date: true,
    },
  })

  return singleOrder
}
