import React from "react";
import { UpComing } from "./UpComing";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";

export const MovieCard = () => {
  return (
    <div className="">
      <UpComing />
      <Popular />
      <TopRated />
    </div>
  );
};
