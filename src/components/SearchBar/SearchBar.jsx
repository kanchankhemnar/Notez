/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const SearchBar = ({value,onChange,handleSearch,onClearSearch}) => {
  return (
    <>
      <div className="w-80 flex items-center px-4 bg-slate-100 rounded-full">
        <input
          type="text"
          placeholder="Search note"
          className="w-full text-xs bg-transparent py-[11px] outline-none"
          value={value}
          onChange={onChange}
        />
        {value && <IoMdClose className="mr-1 text-xl text-slate-500 cursor-pointer hover:text-black"  onClick={onClearSearch} /> }
        
        <FaMagnifyingGlass
          className="text-slate-400"
          onClick={handleSearch}
        />
      </div>
    </>
  );
};
export default SearchBar;
