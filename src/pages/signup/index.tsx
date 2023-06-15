import imagemEnvelope from "#/icons/envelope.svg";
import imagemChave from "#/icons/chave.svg";
import imagemLogo from "#/icons/logo.svg";
import imagemUsuario from "#/icons/usuarioAtivo.svg";
import imagemUsername from "#/icons/username.svg";
import PublicInput from "@/components/publicInput";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import ImageUploader from "@/components/imageUploader";
import imagemAvatarGeral from "#/icons/avatar.svg";
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "@/utils/validators";
import UserService from "@/services/UserService";

const UserServiceInstance = new UserService();

export default function Login() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirmation, setSignupPasswordConfirmation] =
    useState("");
  const [signupName, setSignupName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupAvatar, setSignupAvatar] = useState(null);

  const formValidation = () => {
    return (
      validateName(signupName) &&
      validateName(signupUsername) &&
      validateEmail(signupEmail) &&
      validatePassword(signupPassword) &&
      validatePasswordConfirmation(signupPassword, signupPasswordConfirmation)
    );
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <section className="signupSection publicPage">
      <div className="logoContainer desktopOnly">
        <Image
          src={imagemLogo}
          alt="Isragram logo"
          fill
          className="logo desktopOnly"
        />
      </div>
      <div className="loginInfoContainer">
        <form onSubmit={onFormSubmit}>
          <ImageUploader
            previewVariant="avatar avatarPreview"
            setImage={setSignupAvatar}
            imagePreview={signupAvatar?.preview || imagemAvatarGeral}
          />
          <PublicInput
            iconImage={imagemUsuario}
            inputPlaceholder="Complete name"
            inputType="text"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSignupName(e.target.value);
            }}
            showValidationMessage={signupName && !validateName(signupName)}
            validationMessage="The name has to be at least 3 characters long"
          />
          <PublicInput
            iconImage={imagemUsername}
            inputPlaceholder="Username"
            inputType="text"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSignupUsername(e.target.value);
            }}
            showValidationMessage={
              signupUsername && !validateName(signupUsername)
            }
            validationMessage="The username has to be at least 4 characters long and contain only lowercase letters, numbers or '.' "
          />
          <PublicInput
            iconImage={imagemEnvelope}
            inputPlaceholder="Email"
            inputType="email"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSignupEmail(e.target.value);
            }}
            showValidationMessage={signupEmail && !validateEmail(signupEmail)}
            validationMessage="Please enter a valid email"
          />
          <PublicInput
            iconImage={imagemChave}
            inputPlaceholder="Password"
            inputType="password"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSignupPassword(e.target.value);
            }}
            showValidationMessage={
              signupPassword && !validatePassword(signupPassword)
            }
            validationMessage="The password has to be at least 4 characters long and contain at least one uppercase letter, one lowercase letter and one number"
          />
          <PublicInput
            iconImage={imagemChave}
            inputPlaceholder="Password confirmation"
            inputType="password"
            onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSignupPasswordConfirmation(e.target.value);
            }}
            showValidationMessage={
              signupPasswordConfirmation &&
              !validatePasswordConfirmation(
                signupPassword,
                signupPasswordConfirmation
              )
            }
            validationMessage="The passwords do not match"
          />
          <Button type="submit" text="Signup" disabled={!formValidation()} />
        </form>
        <div className="loginFooter">
          <p>Already have an account?</p>
          <Link href="/">login</Link>
        </div>
      </div>
    </section>
  );
}
