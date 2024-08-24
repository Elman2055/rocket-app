import "./ChangePasswordAdmin.css";

const ChangePasswordAdmin = () => {
  return (
    <div className="changeContainer">
      <div className="changeForm">
        <h2 style={{marginBottom: "40px"}}>Смена данных</h2>
        <div>
          <p>Новый логин</p>
          <input type="text" />
        </div>

        <div>
          <p>Новый пароль</p>
          <input type="text" />
        </div>
        <button className="saveChangesBtn">Сохранить</button>
      </div>
    </div>
  );
};

export default ChangePasswordAdmin;
