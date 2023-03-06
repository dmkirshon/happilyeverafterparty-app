import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

interface UserIdentifierProps {
  name: string;
  handleNameFieldUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitName: (event: React.FormEvent<HTMLFormElement>) => void;
}

const UserIdentifier = ({
  name,
  handleNameFieldUpdate,
  handleSubmitName,
}: UserIdentifierProps) => {
  return (
    <div>
      <Form
        onSubmit={handleSubmitName}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>
          Name
          <input
            type="text"
            value={name}
            required
            onChange={handleNameFieldUpdate}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default UserIdentifier;
