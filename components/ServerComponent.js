export async function fetchData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FREE_URL}/common/v1/all/ott`
  );
  if (!res.ok) {
    throw new Error("Error occurred when fetching posts");
  }
  return res.json();
}

export const ServerComponent = async () => {
  const data = await fetchData();
  console.log(data);
  return data;
};
