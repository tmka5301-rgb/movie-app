"use client";

import { MovieResultsWrap } from "@/components/MovieResultsWrapper";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MovieResultsWrap />
    </Suspense>
  );
}
