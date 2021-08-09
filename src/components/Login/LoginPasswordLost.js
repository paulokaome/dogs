import React from "react";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import Head from "../../components/Helper/Head"

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../api";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:3000/login/perdeu",
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
       <Head title="Perdeu sua Conta?"/>
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};
export default LoginPasswordLost;
