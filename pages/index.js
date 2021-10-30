import { useState } from "react";
import dynamic from "next/dynamic";
import Home from "../components/Home";

const Menu = dynamic(import("../components/Menu"));

export default function IndexPage() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        {menu && <Menu setMenu={setMenu} name={""} />}
        <Home setMenu={setMenu} menu={menu} />
      </div>
      <style jsx>{`
        .page {
          height: 100vh;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
