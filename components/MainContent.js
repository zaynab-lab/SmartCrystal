import { useState } from "react";
import { styles } from "../public/js/styles";
import SmartCrystal from "./SmartCrystal";
import You from "./You";

export default function MainContent() {
  const [next, setNext] = useState(1);

  return (
    <>
      <div className="mainContainer">
        {next === 1 && <You setNext={setNext} next={next} verb={"Have"} />}
        {next === 2 && <You setNext={setNext} next={next} verb={"Want"} />}
        {next === 3 && <You setNext={setNext} next={next} verb={"Need"} />}
        {next === 4 && <SmartCrystal />}
      </div>
      <style jsx>{`
        .mainContainer {
          height: 100%;
          font-size: 14vw;
          white-space: nowrap;
          ${styles.flexJustifycenter};
          ${styles.flexColumn}
          line-height:13vw;
        }
      `}</style>
    </>
  );
}
