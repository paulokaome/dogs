import React, { useContext } from "react";

import { USER_POST } from "../../api";
import { UserContext } from "../../Context/UserContext";

import useForm from "../../hooks/useForm";
import Head from "../../components/Helper/Head"

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import Error from "../Helper/Error";
import useFetch from "../../hooks/useFetch";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleCreateUser(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section>
       <Head title="Cria sua Conta"/>
      <h2 className="title">Cadastre-se</h2>
      <form onSubmit={handleCreateUser}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};
export default LoginCreate;
