import { Image } from "sanity"

type Base ={
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: string
}

interface Product extends Base {
  id: string
  name: string
  images: Image[]
  year: string
  client: string
  description: string
  slug: Slug
}

interface Slug extends Base {
  _type: 'slug'
  current: string
}




