import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signin } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <div>
      <h3>Login</h3>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type={"Password"}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
