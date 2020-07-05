import client from './client/client'

export const getProducts = async (productName) => {
  return await client(`/search?search=${productName}`).then(res => res.data)
}