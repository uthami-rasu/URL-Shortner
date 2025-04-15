import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBgColor } from "./Utils/colorSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { addUser, removeUser } from "./Utils/authSlice";
import Print from "./sub-components/Print";
function App() {
  const queryClient = new QueryClient();

  const location = useLocation();
  const bgColor = useSelector((store) => store.colors?.bgColor);
  const dispatch = useDispatch();

  const curPath = location.pathname;
  // const bg_color = location.pathname === "/qrcode-generator" ? "#" : "#031f39";

  useEffect(() => {
    if (location.pathname === "/qrcode-generator") {
      dispatch(changeBgColor("#03051E"));
    } else if (location.pathname === "/short-url-link") {
      dispatch(changeBgColor("#141b1e"));
    } else {
      dispatch(changeBgColor("#031f39"));
    }
  }, [location.pathname, dispatch]); // only dispatch changeBgColor

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // when bgColor actually changes, apply to body

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Current user:", user);
      if (user) {
        setTimeout(async () => {
          await user.reload(); // <--- force get fresh info
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({
              uid,
              email,
              username: displayName,
              isLogin: true,
            })
          );
        }, 300);

        // navigate("/");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/auth/login");
      }
    });
    // unsubscribe whenever componount unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <Print />
      <div className={`w-full  flex flex-col h-auto bg-[${bgColor}]`}>
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer className="mt-auto" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
