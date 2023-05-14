import { Link } from "react-router-dom";
import hero from "../../../assets/hero-img-3-1.jpeg";

const Hero = () => {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="w-full grid md:grid-cols-2 items-center bg-cover"
      >
        <div className="px-16 py-32">
          <h1 className="font-bebas uppercase text-8xl text-white mb-5">
            Distinct<br /> Coffee Aroma
          </h1>
          <p className="font-jost mb-10">
            The coffee is brewed by first roasting the green coffee beans over
            hot
            <br />
            coals in a brazier. given an opportunity to sample.
          </p>
          <div className="flex gap-5">
          <Link
            className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary hover:text-primary font-medium bg-primary hover:bg-[#0000] text-white transition uppercase"
            to="/"
          >
            Testy Cofee
          </Link>
          <Link
            className="font-jost text-sm tracking-wider py-2 px-5 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition uppercase"
            to="/"
          >
            Read More
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
