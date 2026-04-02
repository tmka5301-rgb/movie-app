"use client";

import MoviesListWrap from "@/components/MoviesListWrapper";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MoviesListWrap />
    </Suspense>
  );
}
