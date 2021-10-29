import {
  FaAppStore,
  FaBtc,
  FaCamera,
  FaDatabase,
  FaFileSignature,
  FaNetworkWired,
  FaPaintBrush,
  FaRobot,
  FaSitemap
} from "react-icons/fa";
import { styles } from "../public/js/styles";
import TopBar from "./TopBar";

const servicesList = [
  { name: "Web Development", logo: <FaSitemap /> },
  { name: "Applications", logo: <FaAppStore /> },
  { name: "Data Science", logo: <FaDatabase /> },
  { name: "AI & Machine Learning", logo: <FaRobot /> },
  { name: "Block Chain", logo: <FaBtc /> },
  { name: "IoT & Network", logo: <FaNetworkWired /> },
  { name: "Graphic Design", logo: <FaPaintBrush /> },
  { name: "Content Writing", logo: <FaFileSignature /> },
  { name: "Photography", logo: <FaCamera /> }
];

export default function Services({ setMenu, menu }) {
  return (
    <>
      {!menu && <TopBar setMenu={setMenu} />}
      <div className="pageContainer">
        <div>
          {servicesList.map((service, i) => (
            <div key={i} className="service">
              <div>{service?.logo}</div>
              <div>{service.name}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pageContainer {
          padding: 1rem;
          padding-top: 5rem;
          overflow: scroll;
        }
        .service {
          font-size: 2rem;
          padding: 0.5rem 0rem;
          ${styles.flexAligncenter}
          gap:1rem;
        }
      `}</style>
    </>
  );
}
