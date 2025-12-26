"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieHome } from "@/app/page";

type ScrollProps = { movies: MovieHome[] };

export const Scroll = ({ movies }: ScrollProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {movies.map(({ backdrop_path }, index) => (
            <CarouselItem key={index}>
              <div className="">
                <img
                  className="object-center object-cover w-360"
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
};
