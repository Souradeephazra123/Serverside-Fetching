import React from "react";
import Moviedetails from "./api";

export default async function FetchData() {
  const Movie = await Moviedetails();
  console.log(Movie);
  return (
    <div>
      <ul className=" flex flex-col gap-2 text-white">
        {Movie.map((movie, idx) => (
          <li key={idx} className="flex flex-col gap-2">
            <p>{movie?.title?.replace(" ", "-") ?? ""}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
