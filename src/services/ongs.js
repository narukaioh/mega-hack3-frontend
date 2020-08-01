import client, { get } from "./client/client"

export const getONGs = async () =>
  await get(`/ongs`).then((res) =>{
    const result = res.ongs.map((ong) => {
      console.log(ong)
      return {
        id: ong.id,
        name: ong.name,
        image: ong.logo,
        description: ong.description,
        tags: ong.tags,
        locale: ong.city,
        subject: ong.cause,
      }
    })
    return result === null ? [] : result
  })

export const getONG = async (id) => await get(`ong/${id}`).then(res => {
  const { ong } = res;
  return {
    id: ong.id,
    name: ong.name,
    image: ong.logo,
    description: ong.description,
    locale: ong.city,
    subject: ong.cause,
    link: ong.link,
    address: {
      street: ong.address,
      number: ong.number,
      cep: ong.cep,
      neighborhood: "Tijuca",
      city: ong.city,
      state: ong.state,
    },
    tags: ong.tags
  };
})

export const postONG = (ong) => {
  const payload = {
    id: ong.id,
    name: ong.name,
    logo: ong.image,
    cnpj: ong.cnpj,
    description: ong.description,
    cep: ong.cep,
    state: ong.state,
    city: ong.city,
    address: ong.street,
    number: ong.number,
    complement: ong.complement,
    link: ong.link,
    email: ong.email,
    password: ong.password,
    bank: ong.bank,
    account: ong.account,
    agency: ong.agency,
    date_register: new Date(),
    cause: ong.subject,
    need_products: ong.products,
    need_bills: ong.billets,
    tags: ong.tags
  }
  client.post('/ong', payload).then(res => console.log(res))
}

export const searchONGs = async (content) =>
  await get(`ongs?search=${content}`).then((res) => {
    const result = res.ongs.map((ong) => {
      return {
        id: ong.id,
        name: ong.name,
        image: ong.logo,
        description: ong.description,
        tags: ong.tags,
        locale: ong.city,
        subject: ong.cause,
      }
    })

    return result === null ? [] : result
  })
