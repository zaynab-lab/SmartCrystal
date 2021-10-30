import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const darkState = atom({
  key: "darkState",
  default: true
});

export default function Layout({ children }) {
  const [dark, setDark] = useRecoilState(darkState);

  useEffect(() => {
    localStorage.getItem("dark") !== null &&
      setDark(JSON.parse(localStorage.getItem("dark")));
  }, [setDark]);

  return (
    <>
      <>{children}</>
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
          background: ${dark ? "black" : "white"};
          color: ${dark ? "white" : "black"};
          transition: all 0.5s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
