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
    <Form className="user-identifier_form" onSubmit={handleSubmitName}>
      <label className="user-identifier_label-name">
        Name:
        <input
          className="user-identifier_input-name"
          type="text"
          value={name}
          required
          onChange={handleNameFieldUpdate}
        ></input>
      </label>
      <button className="user-identifier_submit" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default UserIdentifier;
