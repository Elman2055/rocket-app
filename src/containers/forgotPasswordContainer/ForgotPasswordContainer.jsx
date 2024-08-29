import { useState } from "react";
import ForgotPassword from "../../components/forgotPassword/ForgotPassword";

const ForgotPasswordContainer = () => {
  const [email, setEmail] = useState("");
  const [changePassword, setChangePassword] = useState("");

  return (
    <ForgotPassword
      email={email}
      setEmail={setEmail}
      changePassword={changePassword}
      setChangePassword={setChangePassword}
    />
  );
};

export default ForgotPasswordContainer;
