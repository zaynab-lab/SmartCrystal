import Image from "next/image";
import TopBar from "./TopBar";

export default function SmartCrystal() {
  return (
    <>
      <div className="top">
        <TopBar />
      </div>
      <div className="Logo">
        <Image alt="" src="/img/Logo.svg" width="120" height="120" />
      </div>
      <div className="Smart">Smart Crystal</div>
      <div className="We">We hold your hands to the world of Technology</div>

      <style jsx>{`
        .Logo {
          text-align: center;
          animation: opacity 1s linear forwards;
        }
        .Smart {
          opacity: 0;
          animation: opacity 1s linear 0.5s forwards;
          width: fit-content;
          padding: 2vw;
          font-size: 14vw;
          color: #946345;
          width: 100%;
          line-height: 12vw;
          text-align: center;
        }
        .We {
          opacity: 0;
          animation: opacity 1s linear 1s forwards;
          font-size: 4vw;
          color: lightblue;
          text-align: center;
          padding: auto;
        }

        .arrow {
          font-size: 12vw;
          position: fixed;
          right: 1rem;
          opacity: 0;
          animation: opacity 1s linear 4s forwards;
          cursor: pointer;
        }
        .top {
          opacity: 0;
          animation: opacity 1s linear 2s forwards;
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
