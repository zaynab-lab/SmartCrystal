import MainContent from "../components/MainContent";

export default function IndexPage() {
  return (
    <>
      <div className="page">
        <MainContent />
      </div>
      <style jsx>{`
        .page {
          height: 100vh;

          overflow: hidden;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: "Roboto";
          font-weight: 900;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          font-size: 3rem;
          margin: 0;
          font-family: "Roboto";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: black;
          color: white;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
