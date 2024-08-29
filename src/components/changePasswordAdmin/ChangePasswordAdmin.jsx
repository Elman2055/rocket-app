import "./ChangePasswordAdmin.css";

const ChangePasswordAdmin = ({
  newLogin,
  setNewLogin,
  newPassword,
  setNewPassword,
}) => {
  return (
    <div className="changeContainer">
      <div className="changeForm">
        <h2 style={{ marginBottom: "40px" }}>Смена данных</h2>
        <div>
          <p>Новый логин</p>
          <input
            type="text"
            value={newLogin}
            onChange={(e) => setNewLogin(e.target.value)}
          />
        </div>

        <div>
          <p>Новый пароль</p>
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button className="saveChangesBtn">Сохранить</button>
      </div>
    </div>
  );
};

export default ChangePasswordAdmin;
