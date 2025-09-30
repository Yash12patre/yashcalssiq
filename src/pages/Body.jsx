import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Body = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
