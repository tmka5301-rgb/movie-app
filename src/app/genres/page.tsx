"use client";

import MoviesGenreWrap from "@/components/MovieGenre";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MoviesGenreWrap />
    </Suspense>
  );
}
