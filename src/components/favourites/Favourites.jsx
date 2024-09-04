import choiceLike from "../../../public/choiceLike.png";
import "./Favourites.css";

const Favourites = ({ items, onDeleteFavourites, onAddCartProduct }) => {
  return (
    <div className="favouritesContainer">
      <h2 className="favouritesTitle">Мой список пожеланий</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel sem
        nisi nunc <br /> fermentum risus. Posuere id in imperdiet odio sagittis
        eget est
      </p>

      <div className="favouritesAppWrap">
        {items ? (
          items.map((el) => (
            <div key={el.product_id} className="favouritesApps">
              <img
                src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
                alt="app"
                className="favouritesImage"
              />
              <img
                src={choiceLike}
                alt="choiceLike"
                className="favouritesLike"
              />
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
                    {el.old_price}₸
                  </p>
                )}
                <p>{el.price}₸</p>
              </div>
              <div className="favouritesBtnContainer">
                <button
                  className="favouritesBtn"
                  onClick={() => onDeleteFavourites(el.product_id)}
                >
                  Удалить
                </button>
                <button
                  className="favouritesBtn favouriteBasketBtn"
                  onClick={() => onAddCartProduct(el.product_id)}
                >
                  В коризну
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <h2 style={{ color: "black", marginTop: "20px" }}>
              Избранных товаров нет
            </h2>
          </>
        )}
      </div>
      <div className="favouriteBtnWrap">
        <button>Загрузить больше</button>
      </div>
    </div>
  );
};

export default Favourites;
