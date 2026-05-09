import "./Login.css";
import { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/ui-component/buttons/Button";
import {
  InputPassword,
  InputEmail,
} from "../../components/ui-component/inputs/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    console.log("login");
    console.log(user);

    setEmail("");
    setPassword("");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputEmail
          label={"Email"}
          placeholder={"example@gmail.com"}
          value={email}
          setValue={setEmail}
        />
        <InputPassword
          label={"Password"}
          placeholder={"password123"}
          value={password}
          setValue={setPassword}
        />
        <Button type={"submit"} className={"success"}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
