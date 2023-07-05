import imgHomeActive from "#/icons/homeAtivo.svg";
import imgHomeInactive from "#/icons/homeCinza.svg";
import imgPostsActive from "#/icons/publicacaoAtivo.svg";
import imgPostsInactive from "#/icons/publicacaoCinza.svg";
import imgUserActive from "#/icons/usuarioAtivo.svg";
import imgUserInactive from "#/icons/usuarioCinza.svg";
import Image from "next/image";
import NavBar from "./NavBar";

export default function MobileFooter() {
  return (
    <footer className="privateFooter mobileOnly">
      <NavBar />
    </footer>
  );
}
