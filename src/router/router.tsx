import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "../App";
import SignIn from "../feature/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
]);
