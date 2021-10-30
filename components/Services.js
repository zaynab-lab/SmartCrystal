import {
  FaAppStore,
  FaBtc,
  FaCamera,
  FaDatabase,
  FaDigitalTachograph,
  FaFileSignature,
  FaNetworkWired,
  FaPaintBrush,
  FaRobot,
  FaSitemap
} from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { styles } from "../public/js/styles";
import { darkState } from "./Layout";

const servicesList = [
  {
    name: "Web Development",
    logo: <FaSitemap />,
    description: [
      "Wordpress",
      "Elearning system",
      "Ecommerce system",
      "EMR system",
      "Digital menu"
    ]
  },
  {
    name: "Applications",
    logo: <FaAppStore />,
    description: ["Flutter", "Prograssive web apps"]
  },
  {
    name: "Data Science & ML",
    logo: <FaDatabase />,
    description: [
      "Decision support system",
      "Recommender system",
      "Credit scoring",
      "Dynamic Pricing",
      "Customer Churn",
      "Fraud Detection"
    ]
  },
  {
    name: "AI & Machine Learning",
    logo: <FaRobot />,
    description: ["Data Collector", "Automation system", "RPA"]
  },
  {
    name: "Block Chain",
    logo: <FaBtc />,
    description: ["Dapps", "Smart Contracts", "Wallet"]
  },
  {
    name: "IoT & Network",
    logo: <FaNetworkWired />,
    description: ["Smart home", "Security", "Smart controller"]
  },
  {
    name: "Graphic Design",
    logo: <FaPaintBrush />,
    description: [
      "Logo",
      "Social media posts",
      "Info graphics",
      "Visual identity",
      "Motion graphic"
    ]
  },
  {
    name: "Content Writing",
    logo: <FaFileSignature />,
    description: [
      "Storyboard drawing",
      "Scientific reporting",
      "Project reports",
      "Business planing"
    ]
  },
  {
    name: "Photography",
    logo: <FaCamera />,
    description: ["Photo session", "Product photography"]
  },
  {
    name: "Digital Marketing",
    logo: <FaDigitalTachograph />,
    description: [
      "SWOT analysis",
      "Planning Marketing Campaign",
      "Social media marketing",
      "SEO"
    ]
  }
];

export default function Services() {
  const dark = useRecoilValue(darkState);
  return (
    <>
      <div className="pageContainer">
        {servicesList.map((service, i) => (
          <div key={i} className="service">
            <div className="serviceHead">
              <div>{service?.logo}</div>
              <div>{service?.name}</div>
            </div>
            <div className="serviceDescription">
              {service?.description?.map((obj, j) => (
                <div key={j}> {" - " + obj}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .pageContainer {
          padding: 1rem;
          padding-top: 5rem;
          overflow: scroll;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: space-evenly;
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 1.6rem;
        }
        .service {
          padding: 1rem;
        }
        .service:hover {
          border: 1px solid
            ${dark ? styles.darkThemeColor : styles.lightThemeColor};
          border-radius: 1rem;
        }
        .serviceHead {
          width: 20rem;
          flex: 1 1 20rem;
          text-align: left;
          font-size: 2rem;
          padding-bottom: 0.5rem;
          ${styles.flexAligncenter}
          gap:1rem;
        }
        .service:hover {
          cursor: pointer;
          color: ${dark ? styles.darkThemeColor : styles.lightThemeColor};
        }
        .serviceDescription {
          font-size: 1rem;
          color: ${dark ? "lightgrey" : "grey"};
          padding-left: 3rem;
        }
      `}</style>
    </>
  );
}
