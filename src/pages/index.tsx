import { Inter } from "next/font/google";
import Button from "@/components/button";
import Avatar from "@/components/avatar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1> Teste</h1>
      <Avatar/>
      <Button
        text={"Login"}
        disabled={false}
        variant={"inverted"}
        onClick={() => {
          console.log("clicou");
        }}
      />
    </>
  );
}
