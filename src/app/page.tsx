import { Scroll } from "./about/components/Scroll";
import { MovieCard } from "./components/MovieCard";

// const MovieCard = ({ movie }: { movie: Movie }) => {
//   return (
//     <div>
//       <div>{movie.title}</div>
//       <div>{movie.poster}</div>
//       <div>{movie.rating}</div>
//     </div>
//   );
// };

export default function Home() {
  return (
    <div>
      <Scroll />
      <MovieCard />
    </div>
  );
}
