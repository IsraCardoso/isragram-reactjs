import Avatar from "../avatar";

export default function MakeComment(authenticatedUser) {
  console.log(authenticatedUser)
  return (
    <div className="makeCommentContainer">
      {JSON.stringify(authenticatedUser.authenticatedUser.avatar)}
      <Avatar src={authenticatedUser.authenticatedUser.avatar}  />
      <textarea
        placeholder="Add a comment"
        rows={1}
      />
      <></>
    </div>
  )
}