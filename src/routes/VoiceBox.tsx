import { Link } from "react-router-dom";
import { VoiceRecord } from "../components/VoiceRecord";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/">Back to main page</Link>
      <VoiceRecord />
    </div>
  );
}
