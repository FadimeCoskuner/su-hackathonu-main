import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { Navbar } from ".";

export const MainLayout = () => {
  return (
    <>
      <Helmet>
        <html className="m-0 p-0" />
        <body className="min-h-full m-0 p-0 text-white font-sans  box-border" />
      </Helmet>
      <Navbar />
      <Outlet />
    </>
  );
};
