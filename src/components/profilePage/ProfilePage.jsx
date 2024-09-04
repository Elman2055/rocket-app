import { useAppDispatch } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import { useAuth } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import useDesktop from "../hooks/useDesktop";
import ModalForm from "../ui/modalForm/ModalForm";
import MobileProfilePage from "./MobileProfilePage";
import "./ProfilePage.css";

const ProfilePage = ({
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
  isEdit,
  isActive,
  setIsActive,
  isModal,
  setIsModal,
  mobileActiveIndex,
  setMobileActiveIndex,
  logout,
}) => {
  const dispatch = useAppDispatch();
  const isDesktop = useDesktop();
  const { userData } = useAuth();
  const navigate = useNavigate();

  const handleMobileClick = (index) => {
    setIsActive(index);
    setMobileActiveIndex(mobileActiveIndex === index ? null : index);
  };

  return (
    <>
      {isDesktop ? (
        <>
          <div className="backgroundProfile">
            <h2>Добро пожаловать, {userData.name}</h2>
          </div>
          <ModalForm open={isModal} setOpen={setIsModal} />
          <div className="profileContainer">
            <div className="profileNavigation">
              <h3
                onClick={() => {
                  dispatch(setIsEdit(true));
                  setIsActive(0);
                }}
                className={isActive === 0 ? "activeNav" : ""}
              >
                Редактировать профиль
                {isActive === 0 && <>&#8594;</>}
              </h3>

              <h3
                onClick={() => {
                  dispatch(setIsEdit(false));
                  setIsActive(1);
                }}
                className={isActive === 1 ? "activeNav" : ""}
              >
                Мои заказы
                {isActive === 1 && <>&#8594;</>}
              </h3>

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

            <div className="contentContainer">
              {isEdit ? (
                <>
                  <h2 style={{ marginBottom: "5%" }}>
                    Персональная информация
                  </h2>
                  <div className="formcontainer">
                    <div className="blockForm">
                      <div className="profileItem">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label className="profileLabel">Имя</label>
                        {errors.name && (
                          <p className="errorText">{errors.name}</p>
                        )}
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
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                        <label className="profileLabel">Фамилия</label>
                        {errors.lastName && (
                          <p className="errorText">{errors.lastName}</p>
                        )}
                      </div>
                      <div className="profileItem">
                        <input
                          type="text"
                          style={{ marginTop: "12px" }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="profileLabel profileLabelMail">
                          Почта
                        </label>
                        {errors.email && (
                          <p className="errorText">{errors.email}</p>
                        )}
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
                            vulputate porta tristique lectus felis ...Читать
                            далее
                          </p>

                          <div
                            style={
                              el.beforePrice
                                ? {
                                    display: "flex",
                                    width: "290px",
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
                            <button className="downloadBtn">
                              Скачать архив
                            </button>
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
      ) : (
        <MobileProfilePage
          items={items}
          handleSave={handleSave}
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          errors={errors}
          isActive={isActive}
          setIsActive={setIsActive}
          isModal={isModal}
          setIsModal={setIsModal}
          mobileActiveIndex={mobileActiveIndex}
          logout={logout}
          handleMobileClick={handleMobileClick}
        />
      )}
    </>
  );
};

export default ProfilePage;
