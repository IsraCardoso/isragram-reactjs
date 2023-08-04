import Avatar from "../avatar";

export default function MakeComment(authenticatedUser) {

  return (
    <div className="makeCommentContainer">
      <Avatar src={authenticatedUser.authenticatedUser.avatar} width={32} height={32} />
      <textarea
        placeholder="Add a comment"
        rows={1}
      />

    </div>
  )
}