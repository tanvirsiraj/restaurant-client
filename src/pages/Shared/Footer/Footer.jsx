import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="text-white flex">
        <div className="bg-[hsl(215,28%,17%)] w-full  py-24 flex justify-end pe-14">
          <div className="text-center">
            <h1 className="text-3xl uppercase mb-4 font-primary">Contact us</h1>
            <p className="text-xl font-primary">
              123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon
              - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="w-full bg-[#111827] py-24 flex justify-start ps-14">
          <div className="text-center">
            <h1 className="text-3xl  mb-4 font-primary">Follow US</h1>
            <p className="text-xl font-primary">Join us on social media</p>
            <div className="flex items-center justify-center mt-8 gap-6">
              <a href="https://www.facebook.com/">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center p-4 bg-black text-white text-xl font-primary">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
