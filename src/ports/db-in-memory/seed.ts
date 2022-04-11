import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main () {
  const alice = await prisma.users.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      id: 'b4859fef-77aa-4536-a213-6576ac214acc',
      email: 'alice@prisma.io',
      username: 'Alice',
      password: '1a2b3333',
      first_name: 'Alice',
      last_name: 'Coller',
    },
  })

  const bob = await prisma.users.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      id: 'c991c3a6-c0c5-4904-ab3f-fcb228fd9aa5',
      email: 'bob@prisma.io',
      username: 'Bob',
      password: '123deasg',
      first_name: 'Bob',
      last_name: 'Marley',
    },
  })

  const camiseta = await prisma.products.upsert({
    where: { id: 'c991c3a6-c0c5-4904-ab3f-fcb228fd9aa6' },
    update: {},
    create: {
      id: 'c991c3a6-c0c5-4904-ab3f-fcb228fd9aa6',
      title: 'Camiseta',
      price: 10.20,
      description: 'camiseta preta',
      category: 'camiseta',
      image: 'https://media.istockphoto.com/photos/mens-shortsleeve-tshirt-mockup-in-front-and-back-views-picture-id1328049157?b=1&k=20&m=1328049157&s=170667a&w=0&h=Vr2S5dDVJaUxE8LqQ9q0lc98yNQFfU7rYaUA2rBnphk=',
    },
  })

  const caneca = await prisma.products.upsert({
    where: { id: 'c991c3a6-c0c5-4904-ab3f-fcb228fd9aa7' },
    update: {},
    create: {
      id: 'c991c3a6-c0c5-4904-ab3f-fcb228fd9aa7',
      title: 'Caneca',
      price: 20.00,
      description: 'caneca personalizavel',
      category: 'caneca',
      image: 'https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8=',
    },
  })

  console.log({ alice, bob, camiseta, caneca })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
