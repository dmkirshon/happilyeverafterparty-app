import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_container">
      <h1 className="home_title" style={{ fontSize: "72px" }}>
        Welcome
      </h1>
      <Link className="home_link link_navigation" to="voice-box">
        Leave a Voice Message
      </Link>
      <Link to="https://weduploader.com/upload/O0H3empAUgXVCoxQ">
        Upload Photos
      </Link>
      <footer className="home_footer">
        <p>Designed by Devon</p>
        <p>Created by David</p>
      </footer>
    </div>
  );
}
