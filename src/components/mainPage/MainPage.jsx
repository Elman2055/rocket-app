import RunningLine from "../ui/runningLine/RunningLine";
import choiceLike from "../../../public/choiceLike.png";
import leftOwnImage from "../../../public/leftOwnImage.png";
import rightOwnImage from "../../../public/rightOwnImage.png";
import saleMainImage from "../../../public/saleMainImage.png";
import Carousel from "../ui/carousel/Carousel";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = ({ choiceItems, carouseItems, hintItems }) => {
  return (
    <div>
      <div className="background">
        <p>Ваши любимые приложения здесь</p>
        <div className="mainBackgroundBtns">
          <button>Утилиты</button>
          <button className="playBtnBackground">Игры</button>
        </div>
      </div>
      <RunningLine />
      <div className="mainPageContainer">
        <div className="mainText">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel
            sem nisi nunc fermentum risus. Posuere id in imperdiet odio sagittis
            eget est. Arcu tellus diam a morbi. Ut etiam non ornare lorem
            consectetur ipsum.
          </p>
        </div>
        <p className="choiceTitle">Отличный выбор для всех</p>
        <div className="choiceApp">
          {choiceItems.map((el) => (
            <Link
              key={el.id}
              to={`/product/${el.id}`}
              className="definiteApp"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <img src={el.image} alt="App" className="appBackground" />
              <img src={choiceLike} alt="choiceLike" className="choiceLike" />
              <button className="basketBtn">Добавить в корзину</button>
              <h4>{el.title}</h4>
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
            </Link>
          ))}
        </div>
        <div className="searchAll">
          <button className="searchAppBtn">Смотреть все</button>
        </div>
      </div>
      <div className="centeredText">
        <h4>
          Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel
          sem nisi nunc fermentum risus. Posuere id in imperdiet odio sagittis
          eget est
        </h4>
      </div>
      <div className="mainPageContainer">
        <h2>Приложение, которое стоит попробовать</h2>
        <div className="hint">
          {hintItems.map((el) => (
            <Link
              key={el.id}
              to={`/product/${el.id}`}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <img src={el.image} alt="Hint" className="hintImage" />
              <p>{el.title} &#8594;</p>
            </Link>
          ))}
        </div>
        <Carousel items={carouseItems} title="Самая востребованная утилита" />
      </div>

      <img src={saleMainImage} alt="Sale" className="saleImage" />

      <div className="mainPageContainer">
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Нас выбирают потому что
        </h2>
        <div className="titleWeAdd">
          <div className="firstColumnText">
            <div className="weAddPromoText">
              <h3>Нас выбирают за качество</h3>
              <p>
                О нашем безупречном качестве и внимании к деталям. Мы тщательно
                контролируем каждый этап производства и обслуживания. Наши
                клиенты могут быть уверены в надежности и долговечности наших
                продуктов.
              </p>
              <span>
                Мы всегда стремимся к совершенству и не останавливаемся на
                достигнутом. Выбирая нас, вы выбираете высокое качество и
                надежность.
              </span>
            </div>
            <div className="weAddPromoText">
              <h3> Наши ключевые достоинства</h3>
              <p>
                Узнайте о наших ключевых особенностях и преимуществах. Мы
                предлагаем только проверенные и надежные решения. Наши
                специалисты обладают высоким уровнем профессионализма и опытом.
              </p>
              <span>
                Мы гарантируем индивидуальный подход к каждому клиенту. Наши
                продукты и услуги соответствуют самым высоким стандартам
                качества. Мы стремимся быть лучшими во всем, что делаем.
              </span>
            </div>
          </div>
          <div className="secondColumnText">
            <div className="weAddPromoText">
              <h3> Доверие клиентов к нам</h3>
              <p>
                Как мы заработали доверие тысяч клиентов по всему миру. Наша
                репутация строится на честности, прозрачности и высоком качестве
                обслуживания. Мы всегда держим слово и выполняем все
                обязательства перед клиентами.
              </p>
              <span>
                Благодаря этому мы заслужили доверие и лояльность наших
                клиентов. Мы всегда открыты для обратной связи и стремимся
                улучшать наши услуги. Ваше доверие - наша главная ценность.
              </span>
            </div>
            <div className="weAddPromoText">
              <h3> Причины выбрать нас</h3>
              <p>
                Объективные факты и доводы, которые помогут вам сделать
                правильный выбор. Наша компания гарантирует высокое качество,
                честные цены и индивидуальный подход. Мы работаем на результат и
                всегда стараемся превзойти ожидания наших клиентов.
              </p>
              <span>
                Наша репутация подтверждена годами успешной работы и тысячами
                довольных клиентов. Мы предлагаем решения, адаптированные под
                ваши потребности. Доверьтесь профессионалам и выберите нас.
              </span>
            </div>
          </div>
        </div>

        <div className="ownBlock">
          <img src={leftOwnImage} alt="leftOwnImage" className="ownImage" />
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <div className="ownTitle">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla
                vel sem nisi nunc fermentum risus. Posuere id in imperdiet odio
                sagittis eget est. Arcu tellus diam a morbi. Ut etiam non ornare
                lorem consectetur ipsum.
              </p>
              <button className="ownBtn">Подробнее</button>
            </div>
          </div>
        </div>
        <div className="ownBlock">
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <div className="ownTitle">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla
                vel sem nisi nunc fermentum risus. Posuere id in imperdiet odio
                sagittis eget est. Arcu tellus diam a morbi. Ut etiam non ornare
                lorem consectetur ipsum.
              </p>
              <button className="ownBtn">Подробнее</button>
            </div>
          </div>
          <img src={rightOwnImage} alt="rightOwnImage" className="ownImage" />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default MainPage;
