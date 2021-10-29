import { FaBars } from "react-icons/fa";
import { styles } from "../public/js/styles";

export default function TopBar({ setMenu }) {
  return (
    <>
      <div className="topBar">
        <div className="menuBar" onClick={() => setMenu(true)}>
          <FaBars />
        </div>
      </div>
      <style jsx>{`
        .topBar {
          width: 100%;
          position: absolute;
          top: 0;
          font-size: 2.6rem;
          padding: 0.1rem 0.5rem;
          background: grey;
          ${styles.flexAligncenter}
        }
        .menuBar {
          cursor: pointer;
          width: fit-content;
          padding-top: 0.5rem;
          line-height: 3rem;
        }
      `}</style>
    </>
  );
}
