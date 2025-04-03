import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full  bg-[#031f39]">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
