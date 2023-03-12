import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        // background: `#000 url(${background}) no-repeat center`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        // backgroundAttachment: "fixed",
        // backgroundSize: "contain",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="home_title" style={{ fontSize: "72px" }}>
        Welcome
      </h1>
      <Link className="home_link link_navigation" to="voice-box">
        Leave a Voice Message
      </Link>
      <footer className="home_footer">
        <p>Designed by Devon</p>
        <p>Created by David</p>
      </footer>
    </div>
  );
}
