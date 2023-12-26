import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <section className="mb-24">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white bg-[#151515] opacity-60  py-[140px]">
            <div className="w-[1096px]">
              <div className="max-w-2xl mx-auto">
                <h1 className="mb-5 text-5xl font-bold text-white font-logo uppercase">
                  {title}
                </h1>
                <p className="text-xl font-logo uppercase">{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Cover;
