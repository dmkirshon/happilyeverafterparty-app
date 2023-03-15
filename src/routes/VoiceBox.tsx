import { useState } from "react";
import { Link } from "react-router-dom";
import UserIdentifier from "../components/UserIdentifier";
import VoiceRecord from "../components/VoiceRecord";

export default function Home() {
  const [name, setName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNameFieldUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleSubmitName = (event: React.FormEvent<HTMLFormElement>) => {
    setIsFormSubmitted(true);
    event.preventDefault();
  };

  return (
    <div className="voice-box_container">
      <header className="voice-box_header">
        <h1 className="voice-box_title">Voice Box</h1>
        <Link className="voice-box_link_home" to="/">
          Back to Welcome Page
        </Link>
      </header>
      {!isFormSubmitted ? (
        <UserIdentifier
          name={name}
          handleNameFieldUpdate={handleNameFieldUpdate}
          handleSubmitName={handleSubmitName}
        />
      ) : (
        <VoiceRecord name={name} />
      )}
    </div>
  );
}
