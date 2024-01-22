/* eslint-disable react-refresh/only-export-components */
import wave from "../assets/wave.svg";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helper"; // helper func
import Nav from "../components/Nav";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
