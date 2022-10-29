import Nav from "./Nav";
import Footer from "./Footer";

import { Nunito, Poppins, Source_Code_Pro } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppins",
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--sourceCodePro",
});

export default function Layout({ children }) {
  return (
    <div
      className={`container ${nunito.variable} ${poppins.variable} ${sourceCodePro.variable}`}
    >
      <div className="wrapper">
        <Nav />
        <main className="page">
          <div className="page-wrapper">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
