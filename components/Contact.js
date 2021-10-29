import TopBar from "./TopBar";

export default function Contact({ setMenu, menu }) {
  return (
    <>
      {!menu && <TopBar setMenu={setMenu} />}
      <div className="pageContainer">Comming Soon</div>

      <style jsx>{`
        .pageContainer {
          padding-top: 5rem;
        }
      `}</style>
    </>
  );
}
