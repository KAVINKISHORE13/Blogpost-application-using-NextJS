import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My next js app | Home</title>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link> */}
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
