import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Root from "../src/routes/root";
import Shoppage from "./pages/Shoppage/Shoppage.jsx";
import ErrorPage from "./pages/Errorpage/error-page.jsx";
import ProductCart from "./components/ProductCart/ProductCart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "shopping",
        element: <Shoppage />,
      },
      {
        path: "items/:itemId",
        element: <ProductCart />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
