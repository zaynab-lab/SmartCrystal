import { FaArrowRight } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { styles } from "../public/js/styles";
import { darkState } from "./Layout";

export default function You({ setNext, next, verb }) {
  const dark = useRecoilValue(darkState);

  return (
    <>
      <div className="YouContainer">
        <div className="You">You</div>
        <div className="Verb">{verb}</div>
        {verb === "Have" && (
          <div className="Phrase">
            <div className="Words"></div>
            <div className="Ideas">Ideas</div>
          </div>
        )}
        {verb === "Want" && (
          <>
            <div className="ToGain">
              To <span className="Gain">Gain</span> From
            </div>
            <div className="Tech">Technology ?</div>
          </>
        )}
        {verb === "Need" && (
          <>
            <div className="ToGain">
              Smart <span className="Gain">Hands</span>
            </div>
            <div className="ToHold">To Hold Yours</div>
          </>
        )}
      </div>
      <div
        onClick={() => {
          setNext(next + 1);
        }}
        className="arrow"
      >
        <FaArrowRight />
      </div>
      <style jsx>{`
        .YouContainer {
          padding: 4vw;
        }
        .You {
          animation: opacity 1s linear forwards;
          width: fit-content;
          font-size: 16vw;
          line-height: 15vw;
          color: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
        }

        .Verb {
          opacity: 0;
          animation: opacity 1s linear 0.5s forwards;
        }

        .Phrase {
          ${styles.flexAligncenter}
          opacity: 0;
          animation: opacity 1s linear 1s forwards;
          gap: 1rem;
        }
        .ToGain {
          font-size: 12vw;
          opacity: 0;
          animation: opacity 1s linear 1s forwards;
        }
        .Gain {
          background: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
          color: black;
        }
        .Tech {
          font-size: 14vw;
          opacity: 0;
          animation: opacity 1s linear 1.5s forwards;
        }
        .ToHold {
          font-size: 12vw;
          opacity: 0;
          animation: opacity 1s linear 1.5s forwards;
        }

        .Words {
          flex: 1 1 45%;
          background: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
          color: black;
          text-align: center;
        }
        .Words:after {
          content: "";
          animation: wordChanger 3s linear 1s forwards;
        }

        .Ideas {
          flex: 1 1 55%;
        }

        .arrow {
          font-size: 12vw;
          position: fixed;
          right: 1rem;
          opacity: 0;
          animation: opacity 1s linear 4s forwards;
          cursor: pointer;
          z-index: 2;
          color: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
        }

        @keyframes wordChanger {
          0% {
            content: "Big";
          }

          29% {
            opacity: 1;
            content: "Big";
          }

          30% {
            opacity: 0;
            content: "Great";
          }

          64% {
            opacity: 1;
            content: "Great";
          }

          65% {
            opacity: 0;
            content: "Smart";
          }

          100% {
            opacity: 1;
            content: "Smart";
          }
        }

        @keyframes opacity {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
