import Image from "next/image";
import { useRecoilValue } from "recoil";
import { styles } from "../public/js/styles";
import { darkState } from "./Layout";
import TopBar from "./TopBar";

export default function SmartCrystal({ setMenu, menu }) {
  const dark = useRecoilValue(darkState);

  return (
    <>
      {!menu && <TopBar setMenu={setMenu} />}
      <div className="Logo">
        <Image alt="" src="/img/Logo.svg" width="120" height="120" />
      </div>
      <div className="Smart">
        Smart <span className="Crystal"> Crystal</span>
      </div>
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
          color: ${styles.primaryColor};
          width: 100%;
          line-height: 12vw;
          text-align: center;
        }
        .Crystal {
          opacity: 0;
          animation: opacity 1s linear 1s forwards;
        }
        .We {
          opacity: 0;
          animation: opacity 1s linear 1.5s forwards;
          font-size: 4vw;
          color: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
          text-align: center;
          padding: auto;
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
