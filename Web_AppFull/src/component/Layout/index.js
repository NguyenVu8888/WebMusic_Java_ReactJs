import { Outlet } from "react-router-dom";

import Heading from "../Heading";
import Nav from "../Nav";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Heading />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
