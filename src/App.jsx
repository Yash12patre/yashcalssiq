import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Course } from "./pages/Course";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Sing } from "./pages/Sing";
import { Body } from "./pages/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <Sing />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
