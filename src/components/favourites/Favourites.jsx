import choiceLike from "../../../public/choiceLike.png";
import "./Favourites.css";

const Favourites = ({ items }) => {
  return (
    <div className="favouritesContainer">
      <h2 className="favouritesTitle">Мой список пожеланий</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel sem
        nisi nunc <br /> fermentum risus. Posuere id in imperdiet odio sagittis
        eget est
      </p>

      <div className="favouritesAppWrap">
        {items.map((el) => (
          <div key={el.id} className="favouritesApps">
            <img src={el.image} alt="app" className="favouritesImage" />
            <img src={choiceLike} alt="choiceLike" className="favouritesLike" />
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
            <div className="favouritesBtnContainer">
              <button className="favouritesBtn">Удалить</button>
              <button className="favouritesBtn favouriteBasketBtn">
                В коризну
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="favouriteBtnWrap">
        <button>Загрузить больше</button>
      </div>
    </div>
  );
};

export default Favourites;
