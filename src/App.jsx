import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between pt-4 pb-4 pl-32 pr-32 bg-[#F9F8F6]">
        {/* Logo */}
        <div>
          <img src="src/assets/logo.svg" alt="logo" />
        </div>
        {/* Log in, Sign up Button  */}
        <div className="flex flex-row gap-2">
          <button className="w-[127px] h-[48px] rounded-[999px] border border-[#75716B] bg-white text-[#26231E] pt-3 pb-3 pl-10 pr-10">
            Log in
          </button>
          <button className="w-[141px] h-[48px] rounded-[999px] bg-black text-white">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>
    </>
  );
}

export default App;
