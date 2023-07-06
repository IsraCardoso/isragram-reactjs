import imgHomeActive from "#/icons/homeAtivo.svg";
import imgHomeInactive from "#/icons/homeCinza.svg";
import imgPostsActive from "#/icons/publicacaoAtivo.svg";
import imgPostsInactive from "#/icons/publicacaoCinza.svg";
import imgUserActive from "#/icons/usuarioAtivo.svg";
import imgUserInactive from "#/icons/usuarioCinza.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const routeMap = {
  home: {
    activationRoute: ["/"],
    active: imgHomeActive,
    inactive: imgHomeInactive,
  },
  post: {
    activationRoute: ["/post"],
    active: imgPostsActive,
    inactive: imgPostsInactive,
  },
  user: {
    activationRoute: ["/profile/me", "profile/me/edit"],
    active: imgUserActive,
    inactive: imgUserInactive,
  },
};

const routeMapKeys = Object.keys(routeMap); // ["home", "post", "user"]

export default function NavBar({ variant }) {
  const router = useRouter();

  const [activeRoute, setActiveRoute] = useState(routeMapKeys[0]);

  useEffect(() => {
    defineActiveRoute();
  }, [router.asPath]);

  const defineActiveRoute = () => {
    const activeIndex = routeMapKeys.findIndex((key) => {
      return routeMap[key].activationRoute.includes(window.location.pathname);
    });
    if (activeIndex !== -1) {
      setActiveRoute(routeMapKeys[activeIndex]);
    } else {
      setActiveRoute("home");
    }
  };

  const getImage = (routeName) => {
    const currentRoute = routeMap[routeName];
    if (activeRoute === routeName) {
      return currentRoute.active;
    }
    return currentRoute.inactive;
  };

  const handleNavBarIconCLick = (routeName) => {
    setActiveRoute(routeName);
    router.push(routeMap[routeName].activationRoute[0]);
  };

  return (
    <nav className={`navigationBar ${variant}`}>
      <ul>
        <li>
          <Image
            src={getImage("home")}
            alt="home"
            width={20}
            height={20}
            onClick={() => handleNavBarIconCLick("home")}
          />
        </li>
        <li>
          <Image
            src={getImage("post")}
            alt="post"
            width={20}
            height={20}
            onClick={() => handleNavBarIconCLick("post")}
          />
        </li>
        <li>
          <Image
            src={getImage("user")}
            alt="user"
            width={20}
            height={20}
            onClick={() => handleNavBarIconCLick("user")}
          />
        </li>
      </ul>
    </nav>
  );
}
