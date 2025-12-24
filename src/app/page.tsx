import { Scroll } from "./about/components/Scroll";
import { MovieCard } from "./components/MovieCard";
import { Popular } from "./components/Popular";

export default function Home() {
  return (
    <div>
      <Scroll />
      <MovieCard />
    </div>
  );
}
