import { Scroll } from "./about/components/Scroll";
import { MovieCard } from "./components/MovieCard";

import React from "react";

export type MovieHome = {
  title: string;
  star: string;
  vote_average: number;
  poster_path: string;
  description: string;
  backdrop_path: string;
  overview: string;
};
const carouselAPI = async () => {
  const responseNowPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
  const nowPlayingMovies = await responseNowPlaying.json();
  const nowPlayingMoviesResults = nowPlayingMovies.results as MovieHome[];

  return { nowPlayingMoviesResults };
};

const Home = async () => {
  const { nowPlayingMoviesResults } = await carouselAPI();
  return (
    <div className="">
      <Scroll movies={nowPlayingMoviesResults.slice(0, 5)} />
      <MovieCard />
    </div>
  );
};
export default Home;
