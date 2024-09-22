import { HeroImage1 } from "../assets";

const Hero = () => {
  return (
    <div className=" py-[2rem] px-[2rem] md:px-[10rem] flex flex-col md:flex-row justify-between items-center ">
      <div className=" flex-1">
        <h1 className="font-sansJoseph text-3xl  md:text-6xl ">
          Create and sell custom products
        </h1>
        <ul className="my-8 text-_gray/70 space-y-2 font-bold ">
          <li className="flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
              className="w-5 h-5 "
            >
              <g
                fill="#39b75d"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M40.6,12.1l-23.6,23.6l-9.6,-9.6l-2.8,2.9l12.4,12.3l26.4,-26.4z"></path>
                </g>
              </g>
            </svg>
            <span>100% Free to use</span>
          </li>
          <li className="flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
              className="w-5 h-5 "
            >
              <g
                fill="#39b75d"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M40.6,12.1l-23.6,23.6l-9.6,-9.6l-2.8,2.9l12.4,12.3l26.4,-26.4z"></path>
                </g>
              </g>
            </svg>
            <span>900+ High-Quality Products</span>
          </li>
          <li className="flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
              className="w-5 h-5 "
            >
              <g
                fill="#39b75d"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M40.6,12.1l-23.6,23.6l-9.6,-9.6l-2.8,2.9l12.4,12.3l26.4,-26.4z"></path>
                </g>
              </g>
            </svg>
            <span>Largest global print network</span>
          </li>
        </ul>
        <div>
          <button className="bg-_green hover:bg-opacity-75   px-6 py-2 mr-2 text-white ">
            Start for free
          </button>
          <button className=" border border-_gray hover:text-_green text-_gray px-6 py-2  ">
            How it works?
          </button>
        </div>
        <p className="text-_green font-semibold pt-2">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className=" flex-1 ">
        <img src={HeroImage1} alt="hero-image-1" className="w-full h-auto" />
      </div>
    </div>
  );
};
export default Hero;
