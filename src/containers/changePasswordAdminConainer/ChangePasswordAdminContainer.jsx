import { useState } from "react";
import ChangePasswordAdmin from "../../components/changePasswordAdmin/ChangePasswordAdmin";

const ChangePasswordAdminContainer = () => {
  const [newLogin, setNewLogin] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <ChangePasswordAdmin
      newLogin={newLogin}
      newPassword={newPassword}
      setNewLogin={setNewLogin}
      setNewPassword={setNewPassword}
    />
  );
};

export default ChangePasswordAdminContainer;
