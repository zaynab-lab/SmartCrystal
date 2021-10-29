import { FaBullseye, FaEye, FaFlask } from "react-icons/fa";
import { styles } from "../public/js/styles";
import TopBar from "./TopBar";

const strategyList = [
  {
    title: "Mission",
    logo: <FaBullseye />,
    pargraph:
      "Developing the best products, use latest technologies to inspire and implement solutions to business."
  },
  {
    title: "Vision",
    logo: <FaEye />,
    pargraph:
      "We are the most intimate and reliable place for web development services. Your website understands how the world sees you, so it should be compelling and impressive. We are a reliable source of sites that are easy to use and easy to respond to, so we can only hope for the perfect. In addition, front-end and back-end developer teams can quickly redesign existing websites with valuable artifacts. We are here with exciting innovations for many well-known brands. Our motivation is to provide a powerful website with a creative customer center web solution."
  },
  {
    title: "Values",

    logo: <FaFlask />,

    pargraph:
      "We believe in bringing innovation from imaginations in the market to enhance your online market and presence. We are here with the ideal creativity that meets the technology because we know how important it is to engage the audience with your website! Our team always makes sure that your website has every feature to grow. We are still here to serve you passionately with a variety of services. From creating custom e-commerce sites to business sites, we always use the latest technology and proven web solutions to meet your needs. The visuals, accessibility, and usability of your website is essential, so we make sure to provide such websites that are not only workable but visually appealing with fast loading time. Our Front end & backend Developer team presents the most alluring and ever-changing landscapes for your business."
  }
];

export default function About({ setMenu, menu }) {
  return (
    <>
      {!menu && <TopBar setMenu={setMenu} />}
      <div className="pageContainer">
        {strategyList.map((strategy, i) => (
          <div key={i} className="StrategyContainer">
            <div className="StrategyHead">
              <div className="StrategyTitle">{strategy.title}</div>
              <div className="StrategyIcon">{strategy.logo}</div>
            </div>
            <div className="StrategyParg">{strategy.pargraph}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .pageContainer {
          padding: 1rem 2rem;
          padding-top: 5rem;
          ${styles.flexJustifycenter}
          flex-wrap:wrap;
          gap: 3rem;
        }
        .StrategyContainer {
          flex: 1 1 20rem;
        }
        .StrategyTitle {
          border-bottom: 0.5rem solid lightblue;
          width: fit-content;
          ${styles.flexBothcenter}
          ${styles.flexColumn}
        }
        .StrategyParg {
          font-size: 1.2rem;
          padding: 1rem 0rem;
          text-align: justify;
          text-justify: inter-word;
          color: lightblue;
        }
        .StrategyHead {
          ${styles.flexBothcenter}
          ${styles.flexColumn}
        }
        .StrategyIcon {
          font-size: 2.6rem;
          line-height: 0;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
