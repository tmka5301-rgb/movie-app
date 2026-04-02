"use client";
import MovieDetailWrap from "@/components/MovieDetail";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MovieDetailWrap />
    </Suspense>
  );
}
