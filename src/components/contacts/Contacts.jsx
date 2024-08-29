import useDesktop from "../hooks/useDesktop";
import "./Contacts.css";

const Contacts = ({
  name,
  email,
  telephone,
  commit,
  setName,
  setEmail,
  setTelephone,
  setCommit,
}) => {
  const isDesktop = useDesktop();

  return (
    <div className="contactsContainer">
      <h2 className="contactTitle">Контакты</h2>

      <div className="contactsBlock">
        {isDesktop ? (
          <>
            <div className="firstContactBlock">
              <h3>Телефон:</h3>
              <p>+7 (495) 123-45-67</p>
              <p>+7 (775) 243-65-45</p>

              <div className="infoIndent">
                <h3>Электронная почта:</h3>
                <p>approcket@gmail.com</p>
              </div>

              <h3>Адрес офиса:</h3>
              <p>
                ул. Ленина, д. 42, офис 5, <br />
                Москва, Россия, 123456
              </p>
            </div>

            <div className="secondContactBlock">
              <h3>Социальные сети:</h3>
              <p className="social">Telegram</p>
              <p className="social">Instagram</p>

              <div className="infoIndent">
                <h3>Режим работы:</h3>
                <p>
                  Понедельник - Пятница: 9:00 - 18:00 <br /> Суббота: 10:00 -
                  16:00 <br /> Воскресенье: выходной
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="conectionsColumn">
              <div className="allBlocks">
                <div className="firstContactBlock">
                  <h3>Телефон:</h3>
                  <p>+7 (495) 123-45-67</p>
                  <p>+7 (775) 243-65-45</p>

                  <h3 style={{ marginTop: `${isDesktop ? "" : "15%"}` }}>
                    Адрес офиса:
                  </h3>
                  <p>
                    ул. Ленина, д. 42, офис 5, <br />
                    Москва, Россия, 123456
                  </p>

                  <div className="infoIndent">
                    <h3>Режим работы:</h3>
                    <p>
                      Понедельник - Пятница: 9:00 - 18:00 <br /> Суббота: 10:00
                      - 16:00 <br /> Воскресенье: выходной
                    </p>
                  </div>
                </div>

                <div className="secondContactBlock">
                  <h3>Социальные сети:</h3>
                  <p className="social">Telegram</p>
                  <p className="social">Instagram</p>

                  <div className="infoIndent">
                    <h3>Электронная почта:</h3>
                    <p>approcket@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="thirdContactBlock">
          <h2>Свяжитесь с нами</h2>
          <p style={{ marginBottom: "20px" }}>
            Пожалуйста, заполните форму ниже, и мы свяжемся с вами в ближайшее
            время
          </p>
          <div className="contactInpBlock">
            <div className="contactsBlockElem">
              <div className="formItem">
                <input
                  type="text"
                  className="contactInp"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="contactLabel">Имя</label>
              </div>
              <div className="formItem">
                <input
                  type="text"
                  className="contactInp"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="contactLabel">Почта</label>
              </div>
            </div>
            <div className="formItem formItemDown">
              <input
                type="text"
                className="phoneInp"
                required
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <label className="contactLabel contactLabelCall">Телефон</label>
            </div>
            <div className="formItem formItemDown">
              <input
                type="text"
                className="commitInp"
                required
                value={commit}
                onChange={(e) => setCommit(e.target.value)}
              />
              <label className="contactLabel contactLabelCommit">
                Комментарий
              </label>
            </div>
          </div>
          <div className="sendBtnContainer">
            <button className="sendMessageContact">Отправить сообщение</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
