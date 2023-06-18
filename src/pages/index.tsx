import Button from "@/components/button";
import Avatar from "@/components/avatar";
import ImageUploader from "@/components/imageUploader";
import { useEffect, useRef, useState } from "react";
import Login from "@/components/login";
import UserService from "@/services/UserService";
import Home from "@/components/home";

const UserServiceInstance = new UserService();
export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(UserServiceInstance.isAuthenticated());
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Home />
      ) : (
        <Login afterLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}
