import Link from "next/link";

export type Movie = {
  title: string;
  star: string;
  vote_average: number;
  poster_path: string;
};

const movieAPI = async () => {
  const responsePopular = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  const popularMovies = await responsePopular.json();

  const popularMoviesResults = popularMovies.results;

  return { popularMoviesResults };
};

export const Popular = async () => {
  const {
    popularMoviesResults,
  }: {
    popularMoviesResults: Movie[];
  } = await movieAPI();
  return (
    <div className="pl-20 pr-20 pb-10 pt-10 ">
      <div className="flex justify-between pb-10">
        <p className="font-bold text-2xl">Popular</p>
        <Link href="/category/popular">
          <button>See more</button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {popularMoviesResults
          .map((info) => (
            <div key={info.title} className="bg-gray-200 rounded-md">
              <img
                src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                alt=""
                className="h-85 w-[229.73px] rounded-md"
              />
              <p className="flex items-center">
                <img
                  className="h-4 w-4 flex justify-center items-center "
                  src="star.png"
                  alt=""
                />
                {info.vote_average.toFixed(1)}
                /10
              </p>
              <p className="w-57">{info.title}</p>
            </div>
          ))
          .slice(0, 10)}
      </div>
    </div>
  );
};
