import TopBar from "../components/TopBar";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { darkState } from "../components/Layout";
import Menu from "../components/Menu";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function () {
  const [dark, setDark] = useRecoilState(darkState);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      {menu && <Menu setMenu={setMenu} name={page} dark={dark} />}
      {!menu && <TopBar setMenu={setMenu} dark={dark} setDark={setDark} />}
      {page === "About" && <About />}
      {page === "Services" && <Services />}
      {page === "Contact" && <Contact />}

      <style jsx>{`
        .page {
          height: 100vh;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
