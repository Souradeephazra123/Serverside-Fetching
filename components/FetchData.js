import React from "react";
import {Moviedetails} from "./api";
import Link from "next/link";
import Image from "next/image";

export default async function FetchData() {
  const Movie = await Moviedetails();
  // console.log(Movie);
  return (
    <div>
      <ul className=" flex flex-col gap-2 text-white">
        {Movie.map((movie, idx) => (
          <li key={idx} className="flex flex-col gap-2">
            <p>{movie?.title?.replace(" ", "-") ?? ""}</p>
            <Link href={`/movie/${movie?.id}`}>
              <Image
                src={
                  movie?.posterimageurl ??
                  movie?.movieimage ??
                  movie?.backdropimageurl
                }
                width={90}
                height={160}
                alt="movieimage"
              />
            </Link>
           
          </li>
        ))}
      </ul>
    </div>
  );
}
