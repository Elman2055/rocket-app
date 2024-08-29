import React, { useState } from "react";
import Login from "../../components/login/Login";
import { useAuth } from "../../components/authContext/AuthContext";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(email, password);

    if (success) {
      navigate("/");
      setLoading(false);
    } else {
      setLoading(false);
      setError("Произошла ошибка при попытке входа.");
    }
  };

  return (
    <>
      <Loader isOpen={loading} />
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default LoginContainer;
