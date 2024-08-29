import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../../components/register/Register";
import Loader from "../../components/loader/Loader";
import RocketApi from "../../services/rocketApi";

const RegisterContainer = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = "Имя обязательно";
    if (!lastName) errors.lastName = "Фамилия обязательна";
    if (!email) {
      errors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Неверный формат email";
    }
    if (!password) errors.password = "Пароль обязателен";
    return errors;
  };

  const onRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    const response = await RocketApi.getRegisterUser({
      name,
      lastName,
      email,
      password,
    });
    if (response.success) {
      navigate({ pathname: "/login" });
      setLoading(false);
    } else {
      setLoading(false);
      setErrors({ email: response.message });
    }
  };

  return (
    <>
      <Loader isOpen={loading} />
      <Register
        name={name}
        lastName={lastName}
        email={email}
        password={password}
        setName={setName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={onRegister}
        errors={errors}
      />
    </>
  );
};

export default RegisterContainer;
