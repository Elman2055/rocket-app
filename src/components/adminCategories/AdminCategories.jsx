import "./AdminCategories.css";

const AdminCategories = () => {
  const categories = [
    "Социальные сети",
    "Социальные сети",
    "Социальные сети",
    "Социальные сети",
    "Социальные сети",
    "Социальные сети",
  ];

  return (
    <div className="adminCategoryContainer">
      <div className="addCategoryBlock">
        <h2>Добавить категорию</h2>
        <div>
          <h4>Впишите категорию</h4>
          <input type="text" />
          <button>Сохранить</button>
        </div>
        <h2 style={{ margin: "5% 0 0 0" }}>Доступные категории</h2>
      </div>
      <div className="categoriesContainer">
        {categories.map((el, index) => (
          <div key={index} className="categoriesCards">
            <h4>{el}</h4>
            <div className="categoriesAdminBtn">
              <p>Редактировать</p>
              <p>Удалить</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
