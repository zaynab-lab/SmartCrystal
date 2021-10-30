import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { styles } from "../public/js/styles";
import { darkState } from "./Layout";

export default function TopBar({ setMenu }) {
  const [dark, setDark] = useRecoilState(darkState);

  return (
    <>
      <div className="topBar">
        <div className="menuBar" onClick={() => setMenu(true)}>
          <FaBars />
        </div>
        <div
          className="toggleContainer"
          onClick={() => {
            setDark(!dark);
            localStorage.setItem("dark", !dark);
          }}
        >
          <div>{dark ? <FaMoon /> : <FaSun />}</div>
          <div className="toggleCircul"></div>
        </div>
      </div>
      <style jsx>{`
        .topBar {
          width: 100%;
          position: fixed;
          top: 0;
          font-size: 2.6rem;
          padding: 0.1rem 0.5rem;
          background: grey;
          ${styles.flexAligncenter}
          justify-content:space-between
        }
        .menuBar {
          cursor: pointer;
          width: fit-content;
          padding-top: 0.5rem;
          line-height: 3rem;
        }

        .toggleContainer {
          font-size: 1.4rem;
          line-height: 0rem;
          background: ${dark ? "black" : "white"};
          color: ${dark ? "white" : "black"};
          width: 4.6rem;
          padding: 0.2rem;
          height: fit-content;
          border-radius: 4rem;
          ${styles.flexAligncenter}
          -webkit-box-pack:justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          cursor: pointer;
          ${dark
            ? "-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;"
            : "-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse;"}
          transition: all .6s ease-out;
        }
        .toggleCircul {
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 2rem;
          background: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
        }
      `}</style>
    </>
  );
}
