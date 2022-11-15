import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "@mui/material/Input";
import Card from "../ui/Card";

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
    <Card>
      <h3>Login</h3>

      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <Input
        type={"Password"}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Login</button>
    </Card>
  );
};

export default Login;
