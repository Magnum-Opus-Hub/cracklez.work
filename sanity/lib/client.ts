import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token:'skN6D3egismujvjowXK8TMVIXE21AC90nUathlw9lUGxuDkR4ClpoWURCMQuAcTz1uxaHfrlW26Iv4iGN7dWBC1TNx11PgtwlYkpehnbhqLwRZesAL0KacfYpeOciZb5Y5PIqJEQlHLc4wIaBHbva7GBu65uYVOgKKtGQD2LnJZuhc2cVHX4',
  useCdn
})
