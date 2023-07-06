import headerLogo from "#/icons/logoHorizontal.svg";
import searchMagnifyingGlass from "#/icons/lupa.svg";
import Image from "next/image";
import NavBar from "@/components/layout/NavBar";
import { useState } from "react";
import SearchResultsLayout from "./SearchResultsLayout";
import UserService from "@/services/UserService";
import { useRouter } from "next/router";

const UserServiceInstance = new UserService();

export default function Header() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearchTermChange = async (e) => {
    setSearchTerm(e.target.value);
    setSearchResults([]);
    if (searchTerm.length < 3) {
      return;
    }
    try {
      const { data } = await UserServiceInstance.searchUsers(e.target.value);
      setSearchResults(data);
    } catch (error) {
      alert("Erro ao realizar pesquisa. " + error?.response?.data?.error);
    }
  };
  const onClickOnSearchResults = (id) => {
    setSearchTerm("");
    setSearchResults([]);
    router.push(`/profile/${id}`);
  };

  const redirectToHome = () => {
    router.push("/");
  }

  return (
    <header className="mainHeader">
      <div className="mainHeaderContent">
        <div className="mainHeaderLogo">
          <Image src={headerLogo} alt="Logo" onClick={()=> redirectToHome()}/>
        </div>
        <div className="mainHeaderSearhBar">
          <div className="searchBarMagnifyingGlass">
            <Image src={searchMagnifyingGlass} alt="search" />
          </div>
          <input
            type="text"
            onChange={onSearchTermChange}
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
              onClick={() => onClickOnSearchResults(r._id)}
            />
          ))}
        </div>
      )}
    </header>
  );
}
