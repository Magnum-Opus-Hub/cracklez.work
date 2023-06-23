import { client } from "../sanity/lib/client"

import { projects } from "../src/utils/projects"

export async function seedSanityData() {
  const transaction = client.transaction()
  projects.forEach((item) => {
    const product = {
      _type: "product",
      _id: item.id,
      name: item.name,
      description: item.description,
      client: item.client,
      year: item.year,

    }
    transaction.createOrReplace(product)
  })
  await transaction.commit()
  await seedSanityImages()
  console.log("Sanity data seeded")
}

async function seedSanityImages() {
  projects.forEach(async (item) => {
    let images: any[] = []
    for (const image of item.images) {
      const imageAssetResponse = await fetch(image)
      const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
      const imageAsset = await client.assets.upload(
        "image",
        Buffer.from(imageAssetBuffer)
      )
      images.push({
        _key: imageAsset._id,
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      })
    }
    await client
      .patch(item.id)
      .set({ "slug.current": slugify(item.name), images })
      .commit()
  })
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
