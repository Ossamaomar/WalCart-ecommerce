import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <div className="container px-4 md:px-10 lg:px-14 xl:px-20 mx-auto flex items-center justify-center flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
