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
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Welcome</h1>
      <Link to="/">Back to main page</Link>
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
