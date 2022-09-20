import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(registerEmail, registerPassword, firstName, lastName);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h3>Register user</h3>
      <input
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="Email"
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <input
        type={"Password"}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={handleSubmit}> Create User</button>
    </div>
  );
};

export default Signup;
