import { styles } from "../public/js/styles";
import Link from "next/link";
import { darkState } from "./Layout";
import { useRecoilValue } from "recoil";

const pageLists = [
  { title: "Home", name: "" },
  { title: "About us", name: "About" },
  { title: "Services", name: "Services" },
  { title: "Contact us", name: "Contact" }
];

export default function Menu({ setMenu, name }) {
  const dark = useRecoilValue(darkState);

  return (
    <>
      <div className="menuContainer">
        <div
          className="X"
          onClick={() => {
            setMenu(false);
          }}
        >
          X
        </div>
        <div className="menuContent">
          {pageLists.map((page, i) => (
            <Link key={i} href={`/${page.name}`} replace>
              <div
                className={
                  page.name === name
                    ? page.name + " active"
                    : page.name + " pageName"
                }
                onClick={() => setMenu(false)}
              >
                {page.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .menuContainer {
          width: 100vw;
          height: 100vh;
          transition: width 2s;
          padding: 2vh 2rem;
          z-index: 10;
          animation: menuContainr 0.3s linear forwards;
        }
        .X {
          cursor: pointer;
        }
        .menuContent {
          padding: 1rem;
        }
        .menuContent div {
          padding: 0.1rem 0.3rem;
          cursor: pointer;
          width: fit-content;
          width: 15rem;
          white-space: nowrap;
        }
        .pageName:hover {
          color: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
        }

        .Home {
          animation: menuItems 0.3s linear forwards;
        }
        .About {
          opacity: 0;
          animation: menuItems 0.3s linear 0.3s forwards;
        }
        .Services {
          opacity: 0;
          animation: menuItems 0.3s linear 0.6s forwards;
        }
        .Contact {
          opacity: 0;
          animation: menuItems 0.3s linear 0.9s forwards;
        }
        .active {
          background: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
          color: black;
        }

        @keyframes menuContainr {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translatX(0vw);
          }
        }

        @keyframes menuItems {
          0% {
            opacity: 0;
            transform: translateX(-15rem);
          }

          100% {
            opacity: 1;
            transform: translatX(0rem);
          }
        }
      `}</style>
    </>
  );
}
