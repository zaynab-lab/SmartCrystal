import { useState } from "react";
import dynamic from "next/dynamic";
import Home from "../components/Home";

const Menu = dynamic(import("../components/Menu"));
const About = dynamic(import("../components/About"));
const Services = dynamic(import("../components/Services"));
const Contact = dynamic(import("../components/Contact"));

export default function IndexPage() {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState("Home");

  return (
    <>
      <div className="page">
        {menu && <Menu setMenu={setMenu} setPage={setPage} name={page} />}
        {page === "Home" && <Home setMenu={setMenu} menu={menu} />}
        {page === "About" && <About setMenu={setMenu} menu={menu} />}
        {page === "Services" && <Services setMenu={setMenu} menu={menu} />}
        {page === "Contact" && <Contact setMenu={setMenu} menu={menu} />}
      </div>
      <style jsx>{`
        .page {
          height: 100vh;
          overflow: auto;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: "Roboto";
          font-weight: 900;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          font-size: 3rem;
          margin: 0;
          font-family: "Roboto";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: black;
          color: white;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
