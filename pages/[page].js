import TopBar from "../components/TopBar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { darkState } from "../components/Layout";

const Menu = dynamic(import("../components/Menu"));
const About = dynamic(import("../components/About"));
const Services = dynamic(import("../components/Services"));
const Contact = dynamic(import("../components/Contact"));

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
