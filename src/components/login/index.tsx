import PublicInput from "../publicInput";
import imagemEnvelope from "#/icons/envelope.svg";
import imagemChave from "#/icons/chave.svg";
import imagemLogo from "#/icons/logo.svg";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import { validateEmail, validatePassword } from "@/utils/validators";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const formValidation = () => {
    return validateEmail(loginEmail) && validatePassword(loginPassword);
  };

  

  return (
    <section className="loginSection publicPage">
      <div className="logoContainer">
        <Image src={imagemLogo} alt="Isragram logo" fill className="logo" />
      </div>
      <div className="loginInfoContainer">
        <form action="">
          <p>{JSON.stringify(process.env.PUBLIC_API_URL)}</p>
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
          <Button type="submit" text="Login" disabled={!formValidation()} />
        </form>
        <div className="loginFooter">
          <p>Don't have an account?</p>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </section>
  );
}
