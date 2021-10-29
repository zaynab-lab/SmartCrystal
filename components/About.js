import TopBar from "./TopBar";

export default function About({ setMenu, menu }) {
  return (
    <>
      {!menu && <TopBar setMenu={setMenu} />}
      <div className="pageContainer">
        <div className="Strategy">Mission</div>
        <div className="StrategyParg">
          Developing the best products, use latest technologies to inspire and
          implement solutions to business.
        </div>
        <div className="Strategy">Vision</div>
        <div className="StrategyParg">
          We are the most intimate and reliable place for web development
          services. Your website understands how the world sees you, so it
          should be compelling and impressive. We are a reliable source of sites
          that are easy to use and easy to respond to, so we can only hope for
          the perfect. In addition, front-end and back-end developer teams can
          quickly redesign existing websites with valuable artifacts. We are
          here with exciting innovations for many well -known brands. Our
          motivation is to provide a powerful website with a creative customer
          center web solution.
        </div>
        <div className="Strategy">Values</div>
        <div className="StrategyParg">
          We believe in bringing innovation from imaginations in the market to
          enhance your online market and presence. We are here with the ideal
          creativity that meets the technology because we know how important it
          is to engage the audience with your website! Our team always makes
          sure that your website has every feature to grow. We are still here to
          serve you passionately with a variety of services. From creating
          custom e-commerce sites to business sites, we always use the latest
          technology and proven web solutions to meet your needs. The visuals,
          accessibility, and usability of your website is essential, so we make
          sure to provide such websites that are not only workable but visually
          appealing with fast loading time. Our Front end & backend Developer
          team presents the most alluring and ever-changing landscapes for your
          business.
        </div>
      </div>
      <style jsx>{`
        .pageContainer {
          padding: 1rem;
          padding-top: 5rem;
        }
        .Strategy {
          border-bottom: 0.5rem solid lightblue;
          width: fit-content;
        }
        .StrategyParg {
          font-size: 1.2rem;
          padding: 1rem 0rem;
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>
    </>
  );
}
