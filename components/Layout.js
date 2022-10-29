import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container">
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
