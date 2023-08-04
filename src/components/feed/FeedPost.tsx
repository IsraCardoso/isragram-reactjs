import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../avatar";
import LikeIcon from "#/icons/curtir.svg";
import LikedIcon from "#/icons/curtido.svg";
import CommentIcon from "#/icons/comentarioCinza.svg";
import CommentActiveIcon from "#/icons/comentarioAtivo.svg";
import MakeComment from "@/components/feed/MakeComment"

const charLimitForDescription = 90;

export default function FeedPost({
  usuario,
  fotoDoPost,
  descricao,
  comentarios,
  authenticatedUser,
}) {
  const [currentDescriptionSize, setCurrentDescriptionSize] = useState(
    charLimitForDescription
  );
  const [mustShowMakeCommentSection, setMustShowMakeCommentSection] = useState(false);

  const descriptionActualSize = descricao.length;
  const isDescripionBiggerThanLimit = () => {
    return descriptionActualSize > currentDescriptionSize;
  };
  const changeDescripttionSize = () => {
    if (isDescripionBiggerThanLimit()) {
      setCurrentDescriptionSize(descriptionActualSize);
    }
  };
  const editDescription = () => {
    let newDescription = descricao.substring(0, currentDescriptionSize);
    if (isDescripionBiggerThanLimit()) {
      newDescription += "...";
    }
    return newDescription;
  };

  return (
    <div className="feedPost">
      <Link href="/">
        <section className="feedPostHeader">
          <span className="feedPostAvatarContainer">
            <Avatar src={usuario.avatar} width={32} height={32} />
          </span>
          <strong>{usuario.nome}</strong>
        </section>
      </Link>
      <div className="feedPostContent">
        <Image src={fotoDoPost} alt={usuario.nome} fill={true} />
      </div>
      <div className="feedPostFooter">
        <div className="FeedPostFooterActions">
          <Image
            src={LikeIcon}
            alt="like"
            width={20}
            height={20}
            onClick={() => console.log("Curtir")}
          />
          <Image
            src={CommentIcon}
            alt="comment"
            width={20}
            height={20}
            onClick={() => setMustShowMakeCommentSection(!mustShowMakeCommentSection)}
          />
          <span className="FeedPostFooterLikeCount">
            Curtido por <strong>{`X pessoas`}</strong>
          </span>
        </div>
        <div className="FeedPostFooterDescripton">
          <strong className="FeedPostFooterUsername">{usuario.nome}</strong>
          <p className="FeedPostFooterDescription">
            {editDescription()}
            {isDescripionBiggerThanLimit() && (
              <span
                className="FeedPostFooterDescriptionMore"
                onClick={changeDescripttionSize}
              >
                mais
              </span>
            )}
          </p>
        </div>
        <div className="FeedPostComments">
          {comentarios.map((comentario, i) => (
            <div key={i} className="FeedPostComment">
              <strong className="FeedPostFooterUsername">
                {comentario.nome}
              </strong>
              <p className="FeedPostFooterDescription">{comentario.mensagem}</p>
            </div>
          ))}
          {mustShowMakeCommentSection &&
          <MakeComment authenticatedUser={authenticatedUser}/>}
        </div>
      </div>
    </div>
  );
}
