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
import Redirect from "./Pages/Redirect.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import StyledQR from "./Pages/QrTest.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import Print from "./sub-components/Print.jsx";
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
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signin",
    element: <Signin />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgetPassword />, // Assuming you want to use the Login component for forget password
  },
  {
    path: "/r/:shorturl",
    element: <Redirect />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <StyledQR />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Print />
    <RouterProvider router={appRouter} />
  </Provider>
);
