export default async function Moviedetails() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FREE_URL}/common/v1/trending`
  );
  if (!res.ok) {
    throw new Error("Error occurred when fetching posts");
  }
  return res.json();
}
