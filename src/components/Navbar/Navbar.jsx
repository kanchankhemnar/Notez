/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote, getAllNotes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    console.log("Search Query:", searchQuery); // Debugging line
    if (searchQuery && onSearchNote) {
      onSearchNote(searchQuery);
    } else {
      // Optionally handle the case where searchQuery is empty or onSearchNote is null
      console.log("No search query provided or search function not available");
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  const onClearSearch = () => {
    setSearchQuery("");
    getAllNotes();
  };

  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <Link to={"/dashboard"}>
          <div className="grid grid-cols-2 w-24">
            <div className="h-10 w-10  ">
              <img src="https://images.ctfassets.net/9haz2glq4wt0/4rfveQ83nxKftcQQ11nQM3/ab921ac288d52e484a6f6d19bec6c20f/GoodNotes_6_Logo_-_AI_Note-Taking_App_iPad.png" />
            </div>
            <h2 className="text-xl font-medium text-black py-2">NOTEZ</h2>
          </div>
        </Link>

        {onSearchNote && ( // Render the search bar only if onSearchNote is provided
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        )}

        <ProfileInfo onLogout={onLogout} userInfo={userInfo} />
      </div>
    </>
  );
};

export default Navbar;
