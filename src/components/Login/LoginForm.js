import React, { useContext } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { UserContext } from "../../Context/UserContext";

import styles from "./LoginForm.module.css";
import stylesBTN from "../Forms/Button.module.css";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input label="Login" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Entrar</Button> : <Button>Entrar</Button>}

        <Error error={error && "Dados Incorretos"} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? cadastra-se no site.</p>
        <Link className={stylesBTN.button} to="/login/criar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};
export default LoginForm;
