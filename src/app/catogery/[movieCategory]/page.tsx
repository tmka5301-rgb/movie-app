const movieFromDB = async (movieCategroy: string) => {
  const responsePopular = await fetch(
    `https://api.themoviedb.org/3/movie/${movieCategory}?language=en-US&page=1`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  return {};
};
