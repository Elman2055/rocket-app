import "./ProfilePage.css";

const ProfilePage = ({ items }) => {
  return (
    <>
      <div className="backgroundProfile">
        <h2>Добро пожаловать, Алекс</h2>
      </div>
      <div className="profileContainer">
        <div className="profileNavigation">
          <h3>Редактировать профиль</h3>
          <h3 className="activeNav">Мои заказы &#8594;</h3>
          <h3>Избранное</h3>
          <h3>Нужна помощь?</h3>
          <h3>Выйти</h3>
        </div>

        <div>
          <h2 style={{ marginBottom: "30px" }}>История покупок</h2>
          {items &&
            items.map((el) => (
              <div key={el.id} className="historyContainer">
                <img src={el.image} alt="product" className="historyImage" />
                <div className="historyTitleContainer">
                  <h2 style={{ marginBottom: "10px" }}>
                    Lorem ipsum dolor sit amet consectetur.
                  </h2>
                  <p className="textStyle">
                    Lorem ipsum dolor sit amet consectetur. Eget nec nam
                    eleifend lectus luctus eu aenean in. Tincidunt vulputate
                    porta tristique lectus felis ...Читать далее
                  </p>

                  <div style={el.beforePrice && { display: "flex" }}>
                    <p
                      style={{
                        marginRight: "10px",
                        color: "gray",
                        textDecoration: "line-through",
                      }}
                    >
                      {el.beforePrice}
                    </p>
                    <p>{el.price}</p>
                  </div>

                  <div className="historyInfoTitle">
                    <p>Дата покупки: 20.05.2024</p>
                    <p>Номер заказа: №174829</p>
                  </div>

                  <div className="profileHistoryBtns">
                    <button className="downloadBtn">Скачать архив</button>
                    <button className="downloadBtn downloadBtnApk">
                      Скачать APK
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
