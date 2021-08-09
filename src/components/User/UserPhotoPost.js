import React, { useEffect, useState } from "react";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error";

import styles from "./UserPhotoPost.module.css";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import Head from "../../components/Helper/Head"

import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});

  const navigate = useNavigate();
  const { data, error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Post sua Foto"/>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <Input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url("${img.preview}")` }}
          ></div>
        )}
      </div>
    </section>
  );
};
export default UserPhotoPost;
