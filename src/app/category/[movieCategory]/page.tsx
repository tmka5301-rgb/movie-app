import { DEFAULT_MAX_VERSION } from "tls";

export type Movie = {
  title: string;
  star: string;
  vote_average: number;
  poster_path: string;
};
const movieFromTMDB = async (movieCategory: string) => {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${movieCategory}?language=en-US&page=1`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  const pageTwoAPIMovies = await responseMovies.json();
  const pageTwoAPIMoviesResults = pageTwoAPIMovies.results;
  return { pageTwoAPIMoviesResults };
};

export default async function Page({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;

  const moviesPage2 = await movieFromTMDB(movieCategory);
  const { pageTwoAPIMoviesResults }: { pageTwoAPIMoviesResults: Movie[] } =
    await movieFromTMDB(movieCategory);
  console.log(moviesPage2);
  return (
    <div className="flex flex-wrap justify-center gap-4 md:grid-cols-5 w-360 pb-20 pt-10">
      {pageTwoAPIMoviesResults
        .map((data) => (
          <div key={data.title} className="bg-gray-200 rounded-md">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
              className="h-85 w-[229.73px] rounded-md"
            />
            <p className="flex items-center">
              <img
                className="h-4 w-4 flex justify-center items-center "
                src="./star.png"
                alt=""
              />
              {data.vote_average.toFixed(1)}
              /10
            </p>
            <p className="w-57">{data.title}</p>
          </div>
        ))
        .slice(0, 20)}
    </div>
    // <div className="md:grid md:grid-cols-5  grid- grid-cols-2 gap-8 md:space-x-8 pb-8 ">
    //   {pageTwoAPIMoviesResults
    //     .map((data) => {
    //       return (
    //         <div
    //           key={data.title}
    //           className="md:grid md:grid-cols-5 w-[157.5px] h-[309.1px] md:w-[229.73px] md:h-109.75 rounded-2xl space-y-1"
    //         >
    //           <img
    //             src={` https://image.tmdb.org/t/p/original${data.poster_path}`}
    //             alt=""
    //             className="rounded-md"
    //           />
    //           <div className="md:flex md:flex-col pl-2">
    //             <p className="md:flex md:items-center  md:w-[213.73px] md:h-5.75">
    //               <img
    //                 src="./star.png"
    //                 alt=""
    //                 className="pr-1 pb-1.25 h-85 w-[229.73px]"
    //               />
    //               {data.vote_average.toFixed(1)}/10
    //             </p>
    //           </div>
    //           <div className="flex flex-col pl-2">
    //             <p className="text-sm md:text-lg md:w-[213.73pz] md:h-14">
    //               {data.title}
    //             </p>
    //           </div>
    //         </div>
    //       );
    //     })
    //     .slice(0, 20)}
    // </div>
  );
}
