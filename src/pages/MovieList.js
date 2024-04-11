import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  // const [movies, setMovies] = useState([]);

  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
