import Avatar from "../avatar";

export default function SearchResultsLayout({
  avatar,
  username,
  email,
  id,
  onClick,
}) {

  return (
    <div className="searchResult" onClick={() => onClick(id)}>
      <Avatar src={avatar} width={32} height={32} />
      <div className="userInfo">
        <strong>{username}</strong>
        <span>{email}</span>
      </div>
    </div>
  );
}
