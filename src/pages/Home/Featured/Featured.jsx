import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed  mb-32 ">
      <div className="bg-[#151515] bg-opacity-70 pt-10">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
          featured={true}
        ></SectionTitle>
        <div className="max-w-screen-xl mx-auto md:flex justify-center items-center pt-12 pb-20 ">
          <div>
            <img src={featuredImg} />
          </div>
          <div className="md:ml-10 text-white text-2xl font-normal">
            <p>March 20, 2023</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4 text-xl mt-6 hover:bg-black hover:border-black">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
