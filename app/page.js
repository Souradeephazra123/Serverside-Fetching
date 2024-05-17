import ClientMode from "@/components/ClientMode";
import FetchData from "@/components/FetchData";
import ShowMovieDetail from "@/components/ShowMovieDetail";
import { ServerComponent, fetchData } from "@/components/ServerComponent";
import Server from "next/dist/server/base-server";
export default function Home() {
  return (
    <div>
      <p className="text-white"> I am souradeep hazra</p>
      {/* <FetchData /> */}
      {/* <ShowMovieDetail /> */}
      <ClientMode>
        <ServerComponent />
      </ClientMode>
    </div>
  );
}
