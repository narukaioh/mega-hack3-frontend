import client from './client/client'

export const getONGs = async () => await client(`/ong`).then(res => res.data)

export const getONG = async (id) => await client(`ong/${id}`).then(res => res.data)