import RunningLine from "../ui/runningLine/RunningLine";
import choiceLike from "../../../public/choiceLike.png";
import saleMainImage from "../../../public/saleMainImage.png";
import saleImageMobile from "../../../public/saleImageMobile.png";
import Carousel from "../ui/carousel/Carousel";
import useDesktop from "../hooks/useDesktop";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = ({
  choiceItems,
  carouseItems,
  hintItems,
  firstInfoBlock,
  secondInfoBlock,
}) => {
  const navigate = useNavigate();
  const isDesktop = useDesktop();

  return (
    <div>
      <div className="background">
        <p>Ваши любимые приложения здесь</p>
        <div className="mainBackgroundBtns">
          <button onClick={() => navigate({ pathname: "/catalog/Финансовые" })}>
            Утилиты
          </button>
          <button
            className="playBtnBackground"
            onClick={() => navigate({ pathname: "/catalog/Для детей" })}
          >
            Игры
          </button>
        </div>
      </div>
      <RunningLine position={"0"} />
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
          {choiceItems.length > 0 &&
            choiceItems.map((el) => (
              <Link
                key={el.product_id}
                to={`/product/${el.product_id}`}
                className="definiteApp"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
                  alt="App"
                  className="appBackground"
                />
                <img src={choiceLike} alt="choiceLike" className="choiceLike" />
                <button className="basketBtn">Добавить в корзину</button>
                <h4>{el.title}</h4>
                <div style={el.old_price && { display: "flex" }}>
                  {el.old_price && (
                    <p
                      style={{
                        marginRight: "10px",
                        color: "gray",
                        textDecoration: "line-through",
                      }}
                    >
                      {`${el.old_price} ₸`}
                    </p>
                  )}
                  <p>{el.price} ₸</p>
                </div>
                {!isDesktop && (
                  <>
                    <button className="addBasketMobile">
                      Добавить в корзину
                    </button>
                  </>
                )}
              </Link>
            ))}
        </div>
        {isDesktop && (
          <div className="searchAll">
            <Link to={"catalog/all"}>
              <button className="searchAppBtn">Смотреть все</button>
            </Link>
          </div>
        )}
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
          {hintItems.length > 0 &&
            hintItems.map((el) => (
              <Link
                key={el.product_id}
                to={`/product/${el.product_id}`}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
                  alt="Hint"
                  className="hintImage"
                />
                <p>{el.title} &#8594;</p>
              </Link>
            ))}
        </div>
        {isDesktop ? (
          <>
            {carouseItems.length > 0 && (
              <Carousel
                items={carouseItems}
                title="Самая востребованная утилита"
              />
            )}
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "19px" }}>Самая востребованная утилита</h2>
            <div className="choiceApp">
              {carouseItems.length > 0 &&
                carouseItems.map((el) => (
                  <Link
                    key={el.product_id}
                    to={`/product/${el.product_id}`}
                    className="definiteApp"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
                      alt="App"
                      className="appBackground"
                    />
                    <img
                      src={choiceLike}
                      alt="choiceLike"
                      className="choiceLike"
                    />
                    <button className="basketBtn">Добавить в корзину</button>
                    <h4>{el.title}</h4>
                    <div style={el.old_price && { display: "flex" }}>
                      {el.old_price && (
                        <p
                          style={{
                            marginRight: "10px",
                            color: "gray",
                            textDecoration: "line-through",
                          }}
                        >
                          {`${el.old_price} ₸`}
                        </p>
                      )}
                      <p>{el.price}₸</p>
                    </div>
                    {!isDesktop && (
                      <>
                        <button className="addBasketMobile">
                          Добавить в корзину
                        </button>
                      </>
                    )}
                  </Link>
                ))}
            </div>
          </>
        )}
      </div>

      <img
        src={isDesktop ? saleMainImage : saleImageMobile}
        alt="Sale"
        className="saleImage"
      />

      <div className="mainPageContainer">
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: `${isDesktop ? "revert-layer" : "20px"}`,
          }}
        >
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

        {firstInfoBlock.map((el) => (
          <div key={el.product_id} className="ownBlock">
            <img
              src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
              alt="leftOwnImage"
              className="ownImage"
              onClick={() => navigate(`product/${el.product_id}`)}
            />
            <div
              style={{
                width: `${isDesktop ? "50%" : "100%"}`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="ownTitle">
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <button
                  className="ownBtn"
                  onClick={() => navigate(`product/${el.product_id}`)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
        {secondInfoBlock.map((el) => (
          <div key={el.product_id} className="ownBlock ownBlockReverse">
            <div
              style={{
                width: `${isDesktop ? "50%" : "100%"}`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="ownTitle">
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <button
                  className="ownBtn"
                  onClick={() => navigate(`product/${el.product_id}`)}
                >
                  Подробнее
                </button>
              </div>
            </div>
            <img
              src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
              alt="rightOwnImage"
              className="ownImage"
              onClick={() => navigate(`product/${el.product_id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
