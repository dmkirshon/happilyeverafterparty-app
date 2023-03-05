import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="voice-box">Leave a Voice Message</Link>
    </div>
  );
}
