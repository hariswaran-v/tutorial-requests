import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const GuestLayout = () => {
  return (
    <div>
      <TheNavbar />
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
