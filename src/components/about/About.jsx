import rightOwnImage from "../../../public/rightOwnImage.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="aboutBg">
        <p>
          Наша миссия и ценности: что движет нами каждый день и как мы стремимся
          изменить мир к лучшему
        </p>
      </div>

      <div className="aboutContainer">
        <div className="infoAbout">
          <div className="aboutInfoBlock">
            <h2 className="aboutTitle">
              Lorem ipsum dolor sit amet <br /> consectetur. Scelerisque ut
              blandit
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum ut blandit elit
              massa. Pharetra tempus mi fermentum porta malesuada morbi. Eget a
              facilisis a gravida vel dignissim. Purus id id nibh at tempor sed
              volutpat. Tristique convallis rhoncus duis mi. Dignissim velit vel
              massa urna. Ultrices aenean netus volutpat pellentesque fermentum
              nunc dignissim. Aliquet proin consectetur viverra ornare sed amet
              neque. Quam nec justo sit ipsum sit.
            </p>
            <p className="aboutcategoryTitle">
              Et interdum scelerisque pulvinar feugiat leo. Eleifend cras
              blandit ultrices enim eu lacinia tortor. Feugiat eu ullamcorper
              vehicula consectetur accumsan mattis turpis ac turpis. Volutpat
              scelerisque diam cursus arcu pellentesque nibh vitae. Mauris
              curabitur at tincidunt sed donec nunc. Urna aenean posuere cras
              et.{" "}
            </p>

            <p>
              Quisque massa suspendisse consequat nisl vestibulum pellentesque
              bibendum suscipit. Mi vulputate mattis metus imperdiet elit at.
              Varius maecenas senectus tristique tellus aliquam. At consequat
              sem convallis faucibus velit mauris.
            </p>
          </div>
          <img src={rightOwnImage} alt="infoApp" className="aboutImage" />
        </div>
      </div>
      <div className="aboutDownBg">
        <p>
          Lorem ipsum dolor sit amet consectetur. Malesuada integer lectus morbi
          laoreet ut consectetur venenatis nec.
        </p>
      </div>

      <div className="aboutContainer">
        <div className="aboutDownBlock">
          <div className="kidsProductsAbout">
            <h2>Товары для детей</h2>
            <p>
              Все необходимое для детей всех возрастов: игрушки, одежда,
              образовательные приложения и развивающие игры
            </p>
            <div>
              <button className="aboutProductsbtn">Посмотреть товары</button>
            </div>
          </div>

          <div className="kidsProductsAbout allProducts">
            <h2>Продукты питания и напитки</h2>
            <p>
              Лучшие приложения для любителей вкусной и здоровой пищи: рецепты,
              планировщики питания и советы по приготовлению блюд
            </p>
            <div>
              <button className="aboutProductsbtn">Посмотреть товары</button>
            </div>
          </div>

          <div className="kidsProductsAbout allProducts">
            <h2>Продукты питания и напитки</h2>
            <p>
              Лучшие приложения для любителей вкусной и здоровой пищи: рецепты,
              планировщики питания и советы по приготовлению блюд
            </p>
            <div>
              <button className="aboutProductsbtn">Посмотреть товары</button>
            </div>
          </div>

          <div className="kidsProductsAbout">
            <h2>Товары для детей</h2>
            <p>
              Все необходимое для детей всех возрастов: игрушки, одежда,
              образовательные приложения и развивающие игры
            </p>
            <div>
              <button className="aboutProductsbtn">Посмотреть товары</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
