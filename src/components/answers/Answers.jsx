import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../public/arrow.png";
import "./Answers.css";

const Answers = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
          {[
            "Как скачать и установить приложение?",
            "Какие операционные системы поддерживаются?",
            "Какова стоимость подписки на премиум-версию?",
            "Есть ли пробный период для платных приложений?",
            "Как я могу получить техническую поддержку?",
            "Можно ли вернуть деньги за приложение, если оно мне не подошло?",
          ].map((question, index) => (
            <div
              key={index}
              className={`answersCards ${
                expandedCard === index ? "expanded" : ""
              }`}
            >
              <div
                className="answersCardsHeader"
                onClick={() => toggleCard(index)}
              >
                <h3>{question}</h3>
                <img
                  src={arrow}
                  alt="arrow"
                  className={expandedCard === index ? "arrow rotated" : "arrow"}
                />
              </div>
              {expandedCard === index && (
                <>
                  <div className="mar"></div>
                  <div className="answersContent">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste dolorem libero sint nostrum exercitationem porro,
                      nulla natus sequi quaerat. Quam omnis tenetur aspernatur
                      excepturi facere! Unde at fuga est ad.
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}

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
