import { useAppDispatch } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import { useAuth } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import arrow from "../../../public/arrow.png";
import ModalForm from "../ui/modalForm/ModalForm";
import "./ProfilePage.css";

const MobileProfilePage = ({
  items,
  handleSave,
  name,
  setName,
  lastName,
  setLastName,
  phone,
  setPhone,
  email,
  setEmail,
  errors,
  isActive,
  setIsActive,
  isModal,
  setIsModal,
  mobileActiveIndex,
  logout,
  handleMobileClick,
}) => {
  const dispatch = useAppDispatch();
  const { userData } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="backgroundProfile">
        <h2>Добро пожаловать, {userData.name}</h2>
      </div>
      <ModalForm open={isModal} setOpen={setIsModal} />
      <div className={"profileContainer mobile"}>
        <div className={"profileNavigation mobileNav"}>
          <h3
            onClick={() => {
              dispatch(setIsEdit(true));
              handleMobileClick(0);
            }}
            className={isActive === 0 ? "activeNav" : ""}
          >
            Редактировать профиль
            <img
              src={arrow}
              alt="arrow"
              className={`${
                mobileActiveIndex === 0 ? "rotate" : ""
              } transition`}
            />
          </h3>
          {mobileActiveIndex === 0 && (
            <div className="mobileContent">
              <h2 style={{ marginBottom: "5%" }}>Персональная информация</h2>
              <div className="formcontainer">
                <div className="blockForm">
                  <div className="profileItem">
                    {errors.name && (
                      <p className="errorText" style={{ textAlign: "right" }}>
                        {errors.name}
                      </p>
                    )}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label className="profileLabel">Имя</label>
                  </div>

                  <div className="profileItem">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <label className="profileLabel">Номер телефона</label>
                  </div>

                  <div className="profileItem">
                    <input type="password" required />
                    <label className="profileLabel">Пароль</label>
                  </div>
                </div>
                <div className="blockForm">
                  <div className="profileItem">
                    {errors.lastName && (
                      <p className="errorText" style={{ textAlign: "right" }}>
                        {errors.lastName}
                      </p>
                    )}
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label className="profileLabel">Фамилия</label>
                  </div>

                  <div className="profileItem">
                    {errors.email && (
                      <p className="errorText" style={{ textAlign: "right" }}>
                        {errors.email}
                      </p>
                    )}
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="profileLabel">Почта</label>
                  </div>
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
                <button className="saveChangesBtn" onClick={handleSave}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}

          <h3
            onClick={() => {
              dispatch(setIsEdit(false));
              handleMobileClick(1);
            }}
            className={isActive === 1 ? "activeNav" : ""}
          >
            Мои заказы
            <img
              src={arrow}
              alt="arrow"
              className={`${
                mobileActiveIndex === 1 ? "rotate" : ""
              } transition`}
            />
          </h3>
          {mobileActiveIndex === 1 && (
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
            onClick={() => {
              setIsActive(2);
              navigate({ pathname: "/favourites" });
            }}
          >
            Избранное
          </h3>
          <h3
            onClick={() => {
              setIsActive(3);
              navigate({ pathname: "/contacts" });
            }}
          >
            Нужна помощь?
          </h3>
          <h3
            onClick={() => {
              setIsActive(4);
              logout();
            }}
          >
            Выйти
          </h3>
        </div>
      </div>
    </>
  );
};

export default MobileProfilePage;
