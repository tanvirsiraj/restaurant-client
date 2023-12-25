import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Category.css";

const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img className="relative" src={slide1} />

          <div className="flex justify-center">
            <h3 className="text-3xl absolute bottom-4 font-logo  text-white  font-normal">
              Salads
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <div className="flex justify-center">
            <h3 className="text-3xl absolute bottom-4 font-logo  text-white  font-normal">
              Pizzas
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <div className="flex justify-center">
            <h3 className="text-3xl absolute bottom-4 font-logo  text-white  font-normal">
              Soups
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <div className="flex justify-center">
            <h3 className="text-3xl absolute bottom-4 font-logo  text-white  font-normal">
              Desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <div className="flex justify-center">
            <h3 className="text-3xl absolute bottom-4 font-logo  text-white  font-normal">
              Salads
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
