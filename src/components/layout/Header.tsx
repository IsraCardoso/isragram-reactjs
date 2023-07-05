import headerLogo from "#/icons/logoHorizontal.svg";
import searchMagnifyingGlass from "#/icons/lupa.svg";
import Image from "next/image";
import NavBar from "@/components/layout/NavBar";
import { useState } from "react";
import SearchResultsLayout from "./SearchResultsLayout";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchResults([]);
    if (searchTerm.length < 3) {
      return;
    }
    setSearchResults([
      {
        avatar: "",
        username: "Douglas",
        email: "douglas@devagram.com",
        _id: "3242432",
      },
      {
        avatar: "",
        username: "Daniel",
        email: "daniel@devagram.com",
        _id: "8908790879",
      },
    ]);
  };
  const onClickOnSearchResults = (id) => {
    console.log(id);
  };

  return (
    <header className="mainHeader">
      <div className="mainHeaderContent">
        <div className="mainHeaderLogo">
          <Image src={headerLogo} alt="Logo" />
        </div>
        <div className="mainHeaderSearhBar">
          <div className="searchBarMagnifyingGlass">
            <Image
              src={searchMagnifyingGlass}
              alt="search"
              onClick={() => {}}
            />
          </div>
          <input
            type="text"
            onChange={(e) => {
              onSearchTermChange(e);
            }}
            placeholder="Search"
            value={searchTerm}
          />
        </div>
        <NavBar variant="desktopOnly" />
      </div>
      {searchResults.length > 0 && (
        <div className="searchResultsContainer">
          {searchResults.map((r) => (
            <SearchResultsLayout
              key={r._id}
              id={r._id}
              avatar={r.avatar}
              username={r.username}
              email={r.email}
              onClick={()=> onClickOnSearchResults(r._id)}
            />
          ))}
        </div>
      )}
    </header>
  );
}
