import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { CardIcon } from "../../components/CardIcon/CardIcon";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tags/Tags";
import Shop from "../../icons/shop-icon.svg";
import Document from "../../icons/document.svg";
import TagIconRed from "../../icons/tag-icon-red.svg";
import FileUpload from "../../icons/file-upload-red-icon.svg";
import { getONG } from "../../services/ongs";
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
      <div className="header-back">
        <NavLink className="primary" to="/">Voltar para home</NavLink>
      </div>
      <Card>
        <NeedsHeader content={{ image: "https://logos.flamingtext.com/City-Logos/Ong-Logo.webp", name, description }} />
        <IconLabel icon={TagIconRed} label={subject} />
        <p className="ong-page-description">{description}</p>
        <Address content={{ address }} />
        <IconLabel icon={FileUpload}>
          <a href={link} target="_blank">
            {link}
          </a>
        </IconLabel>
      </Card>
    </div>
  );
};
