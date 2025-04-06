import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "./Utils/store";
import { changeBgColor } from "./Utils/colorSlice";
function App() {
  const location = useLocation();
  const bgColor = useSelector((store) => store.colors?.bgColor);
  const dispatch = useDispatch();
  // const bg_color = location.pathname === "/qrcode-generator" ? "#" : "#031f39";

  useEffect(() => {
    if (location.pathname === "/qrcode-generator") {
      dispatch(changeBgColor("#03051E"));
    } else {
      dispatch(changeBgColor("#031f39"));
    }
  }, [location.pathname, dispatch]); // only dispatch changeBgColor

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // when bgColor actually changes, apply to body

  return (
    <div className={`w-full  flex flex-col h-auto bg-[${bgColor}]`}>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
