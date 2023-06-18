import PublicInput from "../publicInput";
import imagemEnvelope from "#/icons/envelope.svg";
import imagemChave from "#/icons/chave.svg";
import imagemLogo from "#/icons/logo.svg";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import { validateEmail, validatePassword } from "@/utils/validators";
import UserService from "@/services/UserService";
import { useRouter } from "next/router";

const UserServiceInstance = new UserService();

export default function Login({ afterLogin }) {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formValidation = () => {
    return validateEmail(loginEmail) && validatePassword(loginPassword);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!formValidation()) {
      return;
    }
    setIsSubmitting(true);
    try {
      console.log(loginEmail, loginPassword);
      await UserServiceInstance.login({
        login: loginEmail,
        password: loginPassword,
      });
      afterLogin();
      router.push("/");
    } catch (error) {
      alert("Erro ao realizar o login. " + error?.response?.data?.error);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="loginSection publicPage">
      <div className="logoContainer">
        <Image src={imagemLogo} alt="Isragram logo" fill className="logo" />
      </div>
      <div className="loginInfoContainer">
        <form onSubmit={onFormSubmit}>
          <PublicInput
            iconImage={imagemEnvelope}
            inputPlaceholder="Email"
            inputType="email"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLoginEmail(e.target.value);
            }}
            showValidationMessage={loginEmail && !validateEmail(loginEmail)}
            validationMessage="Please enter a valid email"
          />
          <PublicInput
            iconImage={imagemChave}
            inputPlaceholder="Password"
            inputType="password"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLoginPassword(e.target.value);
            }}
            showValidationMessage={
              loginPassword && !validatePassword(loginPassword)
            }
            validationMessage="Password must contain: 1 uppercase, 1 lowercase, 1 number and at least 4 characters"
          />
          <Button
            type="submit"
            text="Login"
            disabled={!formValidation() || isSubmitting}
          />
        </form>
        <div className="loginFooter">
          <p>Don't have an account?</p>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </section>
  );
}
