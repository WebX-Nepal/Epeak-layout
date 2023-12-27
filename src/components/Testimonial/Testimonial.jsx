import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[80%] mx-auto flex  flex-col ">
      <h2 className="text-4xl font-Cormorant font-semibold text-center   ">Testimonial</h2>

      <div>
        <Slider {...settings}>
          <div>
            <h3>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda nesciunt quo non, iste sit adipisci quas necessitatibus
              aliquid, nihil doloremque accusamus unde quod molestiae, iure
              tempore illo quos eum sunt.
            </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
