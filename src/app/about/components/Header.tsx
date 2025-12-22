import React from "react";

export const Header = () => {
  return (
    <div className="flex bg-white justify-between pl-10 pr-10 text-black pt-2 pb-2 w-full">
      <div className="font-bold text-base text-indigo-700 gap-2 flex">
        <img
          className="h-6 w-6 flex text-center"
          src="./Vector (2).png"
          alt=""
        />{" "}
        Movie Z
      </div>
      <div className="flex gap-3">
        <button className="font-semibold text-xl">Genre</button>
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md text-start pl-2 "
        />
      </div>
      <button>
        <img src="./Vector (1).png" alt="" />
      </button>
    </div>
  );
};
