import React from "react";

export type Movie = {
  title: string;
  star: string;
  rating: number;
  image: string;
};
const sampleMovie: Movie[] = [
  {
    title: "string",
    rating: 9.0,
    star: "",
    image: "./wicked.jpg",
  },
];

export const MovieCard = () => {
  return <div></div>;
};
