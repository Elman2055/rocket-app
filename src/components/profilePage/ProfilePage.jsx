import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import arrow from "../../../public/arrow.png";
import useDesktop from "../hooks/useDesktop";
import ModalForm from "../ui/modalForm/ModalForm";
import "./ProfilePage.css";

const ProfilePage = ({ items }) => {
  const dispatch = useAppDispatch();
  const isDesktop = useDesktop();

  const {
    products: { isEdit },
  } = useAppSelector((state) => state);

  const [isActive, setIsActive] = useState();
  const [isModal, setIsModal] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);

  useEffect(() => {
    isEdit ? setIsActive(0) : setIsActive(1);
  }, [isEdit]);

  const handleMobileClick = (index) => {
    setIsActive(index);
    setMobileActiveIndex(mobileActiveIndex === index ? null : index);
  };

  return (
    <>
      <div className="backgroundProfile">
        <h2>Добро пожаловать, Алекс</h2>
      </div>
      <ModalForm open={isModal} setOpen={setIsModal} />
      <div className={`profileContainer ${isDesktop ? "" : "mobile"}`}>
        <div className={`profileNavigation ${isDesktop ? "" : "mobileNav"}`}>
          <h3
            onClick={() => {
              dispatch(setIsEdit(true));
              isDesktop ? setIsActive(0) : handleMobileClick(0);
            }}
            className={isActive === 0 ? "activeNav" : ""}
          >
            Редактировать профиль
            {isActive === 0 && isDesktop && <>&#8594;</>}
            {!isDesktop && (
              <img
                src={arrow}
                alt="arrow"
                className={`arrow ${mobileActiveIndex === 0 ? "rotate" : ""}`}
              />
            )}
          </h3>
          {!isDesktop && mobileActiveIndex === 0 && (
            <div className="mobileContent">
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
                    style={
                      isDesktop ? { marginTop: "10px" } : { width: "auto" }
                    }
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
            </div>
          )}

          <h3
            onClick={() => {
              dispatch(setIsEdit(false));
              isDesktop ? setIsActive(1) : handleMobileClick(1);
            }}
            className={isActive === 1 ? "activeNav" : ""}
          >
            Мои заказы
            {isActive === 1 && isDesktop && <>&#8594;</>}
            {!isDesktop && (
              <img
                src={arrow}
                alt="arrow"
                className={`arrow ${mobileActiveIndex === 1 ? "rotate" : ""}`}
              />
            )}
          </h3>
          {!isDesktop && mobileActiveIndex === 1 && (
            <div className="mobileContent">
              <h2 style={{ marginBottom: "30px" }}>История покупок</h2>
              {items &&
                items.map((el) => (
                  <div key={el.id} className="historyContainer">
                    <div className="mobileHistoryContainer">
                      <img
                        src={el.image}
                        alt="product"
                        className="historyImage"
                      />
                      <div className="historyTitleContainer">
                        <h2 className="downTitleProfile">
                          Lorem ipsum dolor sit amet consectetur.
                        </h2>
                        <p className="textStyle">
                          Lorem ipsum dolor sit amet consectetur. Eget nec nam
                          eleifend lectus luctus eu aenean in. Tincidunt
                          vulputate porta tristique lectus felis ...Читать далее
                        </p>

                        <div
                          style={
                            el.beforePrice
                              ? { display: "flex", width: "200px" }
                              : { width: "auto" }
                          }
                        >
                          <p
                            style={{
                              marginRight: "10px",
                              color: "gray",
                              textDecoration: "line-through",
                            }}
                          >
                            {el.beforePrice}
                          </p>
                          <p
                            style={
                              el.beforePrice
                                ? { width: "auto" }
                                : { width: "200px" }
                            }
                          >
                            {el.price}
                          </p>
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
                    <div className="profileHistoryBtnsMobile">
                      <button className="downloadBtnMobile">
                        Скачать архив
                      </button>
                      <button className="downloadBtnMobile downloadBtnApkMobile">
                        Скачать APK
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <h3
            onClick={() => setIsActive(2)}
            className={isActive === 2 ? "activeNav" : ""}
          >
            Избранное {isActive === 2 && <>&#8594;</>}
          </h3>
          <h3
            onClick={() => setIsActive(3)}
            className={isActive === 3 ? "activeNav" : ""}
          >
            Нужна помощь? {isActive === 3 && <>&#8594;</>}
          </h3>
          <h3
            onClick={() => setIsActive(4)}
            className={isActive === 4 ? "activeNav" : ""}
          >
            Выйти {isActive === 4 && <>&#8594;</>}
          </h3>
        </div>

        {isDesktop && (
          <div className="contentContainer">
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
                      style={
                        isDesktop ? { marginTop: "10px" } : { width: "auto" }
                      }
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
                  <button className="saveChangesBtn">
                    Сохранить изменения
                  </button>
                </div>
              </>
            ) : (
              <>
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
                        <h2 className="downTitleProfile">
                          Lorem ipsum dolor sit amet consectetur.
                        </h2>
                        <p className="textStyle">
                          Lorem ipsum dolor sit amet consectetur. Eget nec nam
                          eleifend lectus luctus eu aenean in. Tincidunt
                          vulputate porta tristique lectus felis ...Читать далее
                        </p>

                        <div
                          style={
                            el.beforePrice
                              ? {
                                  display: "flex",
                                  width: "200px",
                                }
                              : { width: "auto" }
                          }
                        >
                          <p
                            style={{
                              marginRight: "10px",
                              color: "gray",
                              textDecoration: "line-through",
                            }}
                          >
                            {el.beforePrice}
                          </p>
                          <p
                            style={
                              el.beforePrice
                                ? { width: "200px" }
                                : { width: "auto" }
                            }
                          >
                            {el.price}
                          </p>
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
        )}
      </div>
    </>
  );
};

export default ProfilePage;
