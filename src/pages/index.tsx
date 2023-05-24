import Button from "@/components/button";
import Avatar from "@/components/avatar";
import ImageUploader from "@/components/imageUploader";
import { useRef, useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const ImageInputRefOnParent = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1> Teste</h1>
      <button onClick={() => ImageInputRefOnParent.current?.click()}>
        Aqui
      </button>

      <ImageUploader
        setImage={setImage}
        imagePreview={image?.preview}
        onSetReference={(inputRef) =>
          (ImageInputRefOnParent.current = inputRef)
        }
      />
      <Avatar />
      <Button text={"Login"} disabled={false} variant={"inverted"} />
      <div>{JSON.stringify(image?.preview)}</div>
    </>
  );
}
