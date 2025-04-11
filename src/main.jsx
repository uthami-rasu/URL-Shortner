import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import QrCodeGenerator from "./Pages/QrCodeGenerator.jsx";
import { Provider } from "react-redux";
import appStore from "./Utils/store.js";
import Analytics from "./components/Analytics.jsx";
import About from "./Pages/About.jsx";
import Login from "./Pages/Login.jsx";
import Signin from "./Pages/Signin.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/qrcode-generator",
        element: <QrCodeGenerator />,
      },
      {
        path: "/short-url-link",
        element: <QrCodeGenerator />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signin",
    element: <Signin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
