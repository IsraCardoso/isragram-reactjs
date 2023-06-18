import UserService from "@/services/UserService";
import { useRouter } from "next/router";

const UserServiceInstance = new UserService();

export default function WithAuth(Component) {
  return (props) => {
    const router = useRouter();
    if (typeof window !== "undefined") {
      if (!UserServiceInstance.isAuthenticated()) {
        router.replace("/");
        return null;
      }
      return <Component {...props} />;
    }
    // return null;
  };
}
