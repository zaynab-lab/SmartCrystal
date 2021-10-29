import { FaBars } from "react-icons/fa";

export default function TopBar() {
  return (
    <>
      <div className="topBar">
        <FaBars />
      </div>
      <style jsx>{`
        .topBar {
          width: 90%;
          position: fixed;
          top: 0;
          font-size: 2.6rem;
          padding: 2vh 1rem;
        }
      `}</style>
    </>
  );
}
