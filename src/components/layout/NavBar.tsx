import imgHomeActive from "#/icons/homeAtivo.svg";
import imgHomeInactive from "#/icons/homeCinza.svg";
import imgPostsActive from "#/icons/publicacaoAtivo.svg";
import imgPostsInactive from "#/icons/publicacaoCinza.svg";
import imgUserActive from "#/icons/usuarioAtivo.svg";
import imgUserInactive from "#/icons/usuarioCinza.svg";
import Image from "next/image";

export default function NavBar({variant}) {
  return (
    <nav className={`navigationBar ${variant}`}>
      <ul>
        <li>
          <Image src={imgHomeActive} alt="Home" width={20} height={20} />
        </li>
        <li>
          <Image src={imgPostsInactive} alt="Posts" width={20} height={20} />
        </li>
        <li>
          <Image src={imgUserInactive} alt="User" width={20} height={20} />
        </li>
      </ul>
    </nav>
  );
}
