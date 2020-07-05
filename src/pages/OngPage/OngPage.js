import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { CardIcon } from "../../components/CardIcon/CardIcon";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tags/Tags";
import Shop from "../../icons/shop-icon.svg";
import Document from "../../icons/document.svg";
import TagIconOrange from "../../icons/tag-icon-orange.svg";
import FileUpload from "../../icons/file-upload-icon.svg";
import { getONG } from "../../services/getONGs";
import { NeedsHeader } from "../../components/Needs/NeedsHeader";
import { Address } from "../../components/Address/Address";
import { IconLabel } from "../../components/IconLabel/IconLabel";
import "./ong-page.scss";
import { Product } from "../../components/Product/Product";

export const OngPage = () => {
  const input = "";
  const [ong, setONG] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    tags: [],
    locale: "",
    subject: "",
    address: {
      street: "",
      number: "",
      cep: "",
      neighborhood: "",
      city: "",
      state: "",
    },
    needs: [{ product: { image: "", title: "", price: "" } }],
    billets: [],
  });
  const { id } = useParams();

  const fetchONG = async () => {
    const ONG = await getONG(id);
    setONG(ONG);
  };

  useEffect(() => {
    fetchONG();
  }, [input]);

  const {
    image,
    name,
    description,
    address,
    subject,
    link,
    tags,
    needs,
    billets,
  } = ong;

  return (
    <div className="container ong-page">
      <Card>
        <NeedsHeader content={{ image, name, description }} />
        <IconLabel icon={TagIconOrange} label={subject} />
        <p className="ong-page-description">{description}</p>
        <Address content={{ address }} />
        <IconLabel icon={FileUpload}>
          <a href={link} target="_blank">
            {link}
          </a>
        </IconLabel>
      </Card>

      <Card>
        <h2 className="ong-page-title">Necessidades</h2>
        <p className="ong-page-description">
          Essas são as necessidades que a instituição pede contribuição. Caso
          clique numa delas verá um lista com todos que tem esta mesma
          necessidade.
        </p>
        <Tags>
          {tags.map((tag) => (
            <Tag label={tag} />
          ))}
        </Tags>
      </Card>

      {needs.map((need) => (
        <CardIcon icon={Shop} alt="Shop">
          <h3 className="ong-page-title">{need.title}</h3>
          <p className="ong-page-description">{need.description}</p>
          <div className="ong-box-date">
            <div>
              <span className="title">Vencimento</span>
              <span>{need.date}</span>
            </div>
            <div>
              <span className="title">Quantidade</span>
              <span>{need.quantity}</span>
            </div>
          </div>
          <Product content={need.product} />
          <div className="ong-button-box">
            <a href={need.link} className="btn small secondary" target="_blank">
              Fazer a diferença
            </a>
          </div>
        </CardIcon>
      ))}

      {billets.map((bilet) => (
        <CardIcon icon={Document} alt="Shop">
          <h3 className="ong-page-title">{bilet.title}</h3>
          <p className="ong-page-description">{bilet.description}</p>
          <div className="ong-box-date">
            <div>
              <span className="title">Vencimento</span>
              <span>{bilet.date}</span>
            </div>
            <div>
              <span className="title">Valor</span>
              <span>{bilet.value}</span>
            </div>
          </div>
          <div className="ong-button-box billets">
            <div className="label">
              <span>Faça a diferença</span>
            </div>
            <a
              href={bilet.recurrence}
              className="btn small secondary"
              target="_blank"
            >
              Mensal
            </a>

            <a
              href={bilet.only}
              className="btn small secondary"
              target="_blank"
            >
              Dessa vez
            </a>
          </div>
        </CardIcon>
      ))}
    </div>
  );
};
