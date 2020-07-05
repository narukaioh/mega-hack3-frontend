import client, { get } from "./client/client";

export const getONGs = async () =>
  await get(`/ongs`).then((res) =>
    res.ongs.map((ong) => {
      return {
        id: ong,
        name: ong.name,
        image: ong.logo,
        description: ong.description,
        tags: ong.tags,
        locale: ong.city,
        subject: ong.cause,
      };
    })
  );

export const getONG = async (id) => await get(`ong/${id}`);

export const searchONGs = async (content) =>
  await get(`ongs?search=${content}`).then((res) => {
    const result = res.ongs.map((ong) => {
      if (ong.id) {
        return {
          id: ong,
          name: ong.name,
          image: ong.logo,
          description: ong.description,
          tags: ong.tags,
          locale: ong.city,
          subject: ong.cause,
        };
      }
      return null
    })

    return result[0] === null ? [] : result
  });
