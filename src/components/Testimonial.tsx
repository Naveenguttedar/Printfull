import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className=" bg-_lightGray py-[2rem] px-[2rem] md:px-[10rem]">
      <div className=" py-12 flex flex-col items-center md:flex-row md:space-x-8 ">
        <h3 className="md:w-[35%] leading-[3rem] text-4xl place-items-center font-bold font-sansJoseph">
          Trusted by over 8M sellers around the world
        </h3>
        <p className="text-lg md:w-[30%] py-4 text-_gray/75">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </p>
      </div>
      <div className="overflow-x-auto px-4 relative z-0 ">
        <div className=" w-screen md:w-full flex gap-8  flex-shrink-0 ">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
