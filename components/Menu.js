const pageLists = [
  { title: "Home", name: "Home" },
  { title: "About us", name: "About" },
  { title: "Services", name: "Services" },
  { title: "Contact us", name: "Contact" }
];

export default function Menu({ setMenu, setPage, name }) {
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
            <div
              key={i}
              className={page.name === name ? page.name + " active" : page.name}
              onClick={() => {
                setPage(page.name);
                setMenu(false);
              }}
            >
              {page.title}
            </div>
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
          background: lightblue;
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
