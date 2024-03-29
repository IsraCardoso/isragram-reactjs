import emptyAvatar from "#/icons/avatar.svg";
import Image from "next/image";

export default function Avatar({ src, width , height }: any) {
  const getAvatar = () => {
    if (src && src !== "undefined") {
      return src;
    }
    return emptyAvatar.src; // .src???
  };

  return (
    <Image
      src={getAvatar()}
      alt="avatar"
      className="avatar"
      width={width}
      height={height}
    />
  );
}
