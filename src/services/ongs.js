import client, { get } from "./client/client"

export const getONGs = async () =>
  await get(`/ongs`).then((res) =>{
    const result = res.ongs[0].map((ong) => {
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
    return result[0] === null ? [] : result
  })

export const getONG = async (id) => await get(`ong/${id}`).then(res => {
  const { ong } = res;
  return {
    id: ong.id,
    name: ong.name,
    image: "https://logos.flamingtext.com/City-Logos/Ong-Logo.webp",
    description: ong.description,
    locale: ong.city,
    subject: ong.cause || "Ong",
    link: "http://google.com.br/ongs",
    address: {
      street: ong.address || "Avenida Paulista",
      number: ong.number || "88",
      cep: ong.cep || "99999-999",
      neighborhood: "Tijuca",
      city: ong.city || "São Paulo",
      state: ong.state || "SP",
    },
    needs: [
      {
        title: "Kit Com 4 Pacotes Fraldas Pampers Atacado Frete Gratis",
        quantity: 100,
        link: "https://produto.mercadolivre.com.br/MLB-1424521706-kit-com-4-pacotes-fraldas-pampers-atacado-frete-gratis-_JM?searchVariation=50074976460&quantity=1#searchVariation=50074976460&position=1&type=item&tracking_id=26a99d68-2c4e-46c8-bea4-d089c7dd7ede",
        date: "10/08/2020",
        description: "Solicitamos fraldar pampers, pois muitas das crianças tem alergias á outras marcas.",
        product: {
          title: "Kit Com 4 Pacotes Fraldas Pampers Atacado Frete Gratis",
          price: "R$ 128,00",
          image: "http://mlb-s2-p.mlstatic.com/808351-MLB40762133514_022020-I.jpg"
        }
      },{
        title: "Fralda Infantil Pampers Confort Sec",
        quantity: 100,
        link: "https://produto.mercadolivre.com.br/MLB-1394912193-fralda-infantil-pampers-confort-sec-_JM?quantity=1#origin=supermarket_carousel&from=search-frontend",
        date: "10/08/2020",
        description: "Solicitamos fraldar pampers, pois muitas das crianças tem alergias á outras marcas.",
        product: {
          title: "Fralda Infantil Pampers Confort Sec",
          price: "R$ 62,79",
          image: "http://mlb-s2-p.mlstatic.com/808351-MLB40762133514_022020-I.jpg"
        }
      }
    ],
    billets: [
      {
        title: "Conta de Luz",
        value: "R$ 500,03",
        recurrency: "",
        only: "",
        date: "10/08/2020",
        description: "Luz é um fato essencial para o funionamento de qualquer lugar e é difícil arrecadar dinheiro para pagar boletos."
      },
      {
        title: "Conta de Água",
        value: "R$ 50,03",
        recurrency: "",
        only: "",
        date: "10/08/2020",
        description: "Luz é um fato essencial para o funionamento de qualquer lugar e é difícil arrecadar dinheiro para pagar boletos."
      }
    ],
    tags: ong.tags || []
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
    const result = res.ongs[0].map((ong) => {
      return {
        id: ong,
        name: ong.name,
        image: ong.logo,
        description: ong.description,
        tags: ong.tags,
        locale: ong.city,
        subject: ong.cause,
      }
    })

    return result[0] === null ? [] : result
  })
