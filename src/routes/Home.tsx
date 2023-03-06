import { Link } from "react-router-dom";
import background from "../assets/3.png";

export default function Home() {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        background: `#000 url(${background}) no-repeat center`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "72px" }}>Welcome</h1>
      <Link to="voice-box">Leave a Voice Message</Link>
    </div>
  );
}
