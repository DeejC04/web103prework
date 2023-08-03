import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import "./index.css"
import Root from "./routes/root"
import NewCreator from "./routes/newcreator"
import ShowCreators from "./routes/showcreators"
import SingleCreator from "./components/singleCreator"
import EditCreator from "./routes/editCreator"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/newcreator",
        element: <NewCreator />,
      },
      {
        path: "/",
        element: <ShowCreators />,
      },
      {
        path: "/creators/:id",
        element: <SingleCreator/>,
      },
      {
        path: "/edit/:id",
        element: <EditCreator />,
      }
    ],
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)