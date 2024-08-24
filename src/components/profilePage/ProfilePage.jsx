import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import ModalForm from "../ui/modalForm/ModalForm";
import "./ProfilePage.css";

const ProfilePage = ({ items }) => {
  const dispatch = useAppDispatch();

  const {
    products: { isEdit },
  } = useAppSelector((state) => state);

  const [isActive, setIsActive] = useState();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    isEdit ? setIsActive(0) : setIsActive(1);
  }, [isEdit]);

  return (
    <>
      <div className="backgroundProfile">
        <h2>Добро пожаловать, Алекс</h2>
      </div>
      <ModalForm open={isModal} setOpen={setIsModal} />
      <div className="profileContainer">
        <div className="profileNavigation">
          <h3
            onClick={() => {
              dispatch(setIsEdit(true));
              setIsActive(0);
            }}
            className={isActive === 0 && "activeNav"}
          >
            Редактировать профиль {isActive === 0 && <>&#8594;</>}
          </h3>
          <h3
            onClick={() => {
              dispatch(setIsEdit(false));
              setIsActive(1);
            }}
            className={isActive === 1 && "activeNav"}
          >
            Мои заказы {isActive === 1 && <>&#8594;</>}
          </h3>
          <h3
            onClick={() => setIsActive(2)}
            className={isActive === 2 && "activeNav"}
          >
            Избранное {isActive === 2 && <>&#8594;</>}
          </h3>
          <h3
            onClick={() => setIsActive(3)}
            className={isActive === 3 && "activeNav"}
          >
            Нужна помощь? {isActive === 3 && <>&#8594;</>}
          </h3>
          <h3
            onClick={() => setIsActive(4)}
            className={isActive === 4 && "activeNav"}
          >
            Выйти {isActive === 4 && <>&#8594;</>}
          </h3>
        </div>

        <div>
          {isEdit ? (
            <>
              <h2 style={{ marginBottom: "5%" }}>Персональная информация</h2>
              <div className="formcontainer">
                <div className="blockForm">
                  <input type="text" placeholder="Имя" />
                  <input type="text" placeholder="Номер телефона" />
                  <input type="password" placeholder="Пароль" />
                </div>
                <div className="blockForm">
                  <input type="text" placeholder="Фамилия" />
                  <input
                    type="text"
                    placeholder="Почта"
                    style={{ marginTop: "10px" }}
                  />
                  <div>
                    <button
                      className="changePasswordBtn"
                      onClick={() => setIsModal(true)}
                    >
                      Изменить пароль
                    </button>
                  </div>
                </div>
              </div>
              <div className="saveChangesContainer">
                <button className="saveChangesBtn">Сохранить изменения</button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <h2 style={{ marginBottom: "30px" }}>История покупок</h2>
              {items &&
                items.map((el) => (
                  <div key={el.id} className="historyContainer">
                    <img
                      src={el.image}
                      alt="product"
                      className="historyImage"
                    />
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
