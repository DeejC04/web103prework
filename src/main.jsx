import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import New from "./routes/new";
import ShowCreators from "./routes/showcreators";
import SingleCreator from "./components/singleCreator";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/new",
        element: <New />,
      }, 
      {
        path: "/",
        element: <ShowCreators />,
      },
      {
        path: "/creators/:id",
        element: <SingleCreator />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);