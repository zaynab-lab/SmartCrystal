import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};
export default MyApp;
