import MobileFooter from "@/components/layout/MobileFooter";
import Header from "@/components/layout/Header";
import UserService from "@/services/UserService";
import { useRouter } from "next/router";
import NavBar from "@/components/layout/NavBar";

const UserServiceInstance = new UserService();

export default function WithAuth(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    if (typeof window !== "undefined") {
      if (!UserServiceInstance.isAuthenticated()) {
        router.replace("/");
        return null;
      }
      return (
        <>
          <Header />
          <Component {...props} />
          <MobileFooter  /> {/*only if mobile*/}
        </>
      )
    }
    // return null;
  }
}
