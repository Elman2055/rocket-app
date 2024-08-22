import { Link } from "react-router-dom";
import arrow from "../../../public/arrow.png";
import "./Answers.css";

const Answers = () => {
  return (
    <div className="answersContainer">
      <h2 className="answersTitle">Темы часто задаваемых вопросов</h2>
      <div className="answersBlockContainer">
        <div className="answersNavigation">
          <h3 className="activeNav">Популярные вопросы &#8594;</h3>
          <h3>Проблемы с заказом</h3>
          <h3>Оплата, акции и подарочные сертификаты</h3>
          <h3>Возврат, возмещение</h3>
        </div>

        <div className="answersLeftBlock">
          <h2>Популярные вопросы</h2>
          <p className="leftBlockTitle">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="answersCards">
            <h3>Как скачать и установить приложение?</h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>

          <div className="answersCards">
            <h3>Какие операционные системы поддерживаются?</h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>

          <div className="answersCards">
            <h3>Какова стоимость подписки на премиум-версию?</h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>

          <div className="answersCards">
            <h3>Есть ли пробный период для платных приложений?</h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>

          <div className="answersCards">
            <h3>Как я могу получить техническую поддержку?</h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>

          <div className="answersCards">
            <h3>
              Можно ли вернуть деньги за приложение, если оно мне не подошло?
            </h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>

          <div className="helpBlock">
            <h2>Нужна дополнительная помощь?</h2>
            <p className="helpAnswersTitle">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <Link to={"/contacts"}>
              <button className="contactAnswersBtn">Связаться с нами</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
