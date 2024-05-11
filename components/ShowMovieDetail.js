import React from "react";
import { SelectedMoviedetails } from "./api";
import Image from "next/image";
import Link from "next/link";
export default async function YourMovieDetails() {
//   const url = require("url");
//   const { parse } = url;
//   const parsedUrl = parse(req.url, true);
//   const lastSegment = parsedUrl.pathname.split("/").pop();
//   console.log(lastSegment);
  const MovieD = await SelectedMoviedetails();
  console.log(MovieD);
  return (
    <div>
      <div className=" flex flex-col gap-2 text-white">
        {MovieD && (
          <div>
            <p>{MovieD?.title?.replace(" ", "-") ?? ""}</p>
            <Link href={`/movie/${MovieD?.id}`}>
              <Image
                src={
                  MovieD?.posterimageurl ??
                  MovieD?.movieimage ??
                  MovieD?.backdropimageurl
                }
                width={90}
                height={160}
                alt="movieimage"
              />
            </Link>
            <p>movie genre: {MovieD?.genre ?? ""}</p>
            <p>Rating: {MovieD?.arrating ?? ""}</p>
            <p>Movie Description: {MovieD?.synopsis ?? ""}</p>
            <p>Language: {MovieD?.language ?? ""}</p>
            <p>Director : {MovieD?.director ?? ""}</p>
          </div>
        )}
      </div>
    </div>
  );
}
