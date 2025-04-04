import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full  flex flex-col h-auto bg-[#031f39]">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
