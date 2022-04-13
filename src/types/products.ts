export type Category = 'camiseta' | 'caneca' | 'adesivo'

export type Products = {
  id: String,
  title: String,
  price: Number,
  description: String,
  category: Category,
  image: String,
}
