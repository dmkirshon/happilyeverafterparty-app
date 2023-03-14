import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_container">
      <h1 className="home_title">Welcome</h1>
      <div className="home_links">
        <Link className="link_nav" to="voice-box">
          ~ Voice Note ~
          <p className="link_subtitle">Record a voice note for the couple</p>
        </Link>
        <Link
          className="link_nav"
          to="https://weduploader.com/upload/O0H3empAUgXVCoxQ"
        >
          ~ Share Moments ~
          <p className="link_subtitle">Upload photos and videos of the night</p>
        </Link>
        <Link className="link_nav" to="faqs">
          ~ FAQs ~<p className="link_subtitle">Frequently asked questions</p>
        </Link>
      </div>
    </div>
  );
}
