import Navebar from "../components/NaveBar/Navebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navebar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
