export async function Moviedetails() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FREE_URL}/common/v1/all/ott`
  );
  if (!res.ok) {
    throw new Error("Error occurred when fetching posts");
  }
  return res.json();
}

export async function SelectedMoviedetails(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FREE_URL}/common/v1/movie/${id}`
  );
  if (!res.ok) {
    if (!res.ok) {
      console.log("Status Code:", res.status);
      console.log("Status Text:", res.statusText);
      throw new Error("Error occurred when fetching posts");
    }
  }
  return res.json();
}
