import { useState } from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";

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
