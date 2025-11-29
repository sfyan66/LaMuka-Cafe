import aboutImg from "../assets/about-pic-primary.jpg";
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="About" className="my-[120px]">
      <h1 className="text-[10vw] md:text-[min(5vw,72px)] text-white text-center pb-[70px]">
        Our Story
      </h1>
      <div className="relative md:max-w-7xl max-w-5xl mx-auto md:flex gap-[60px] xl:gap-32 w-[85vw]">
        <img
          src={aboutImg}
          alt=""
          className="md:size-[40vw] xl:size-[30vw] rounded-2xl"
        />
        <div className="text-[max(3vw,16px)] pt-[7.5%] font-bold px-[6%] md:font-normal md:px-0 text-[black] absolute top-0 left-0 md:relative md:py-0 flex w-[100%] gap-5 md:text-[min(2vw,22px)] md:flex-1 md:text-[var(--text-third-c)] flex-col justify-between md:max-h-[40vw] xl:max-h-[30vw]  h-full overflow-auto md:bg-black bg-white/20 backdrop:backdrop-blur-2xl rounded-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            earum, ut consequuntur pariatur fugiat aliquam voluptatem officia
            blanditiis ipsa laboriosam ad velit voluptate nisi saepe quisquam
            minima culpa eaque amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            perferendis! Delectus, perspiciatis ea beatae necessitatibus
            excepturi temporibus repudiandae. Tempora, vero!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            perferendis, quo placeat molestias laborum repudiandae id quod,
            consequatur similique nisi culpa dolore suscipit sint voluptates?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            commodi iste aut odio fugit mollitia sit excepturi vero ullam,
            maxime, facilis repellendus fuga accusantium autem enim libero sint
            maiores. Rem.
          </p>
        </div>
      </div>
    </Element>
  );
}

export default About;
