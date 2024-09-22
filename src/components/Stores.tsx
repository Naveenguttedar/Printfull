import {
  BirdImage,
  EtsyImage,
  PrintfulLogo,
  ShopifyImage,
  SquareSpaceImage,
  Tree,
  WixImage,
  WooImage,
} from "../assets";
import BrandCard from "./BrandCard";

const Stores = () => {
  return (
    <div className="py-[2rem] mb-24 px-[2rem]  md:px-[10rem]">
      <div className="py-8 text-center space-y-4 ">
        <h1 className="text-4xl font-bold font-sansJoseph ">
          Connect your store
        </h1>
        <p className="text-md text-_gray/75">
          Printfull easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      <div className=" relative flex  min-h-[35rem]">
        <div className="m-auto flex relative min-h-[20rem] aspect-square ">
          {/* //inner */}
          <div className=" m-auto bg-_green uppercase w-[8rem] aspect-square shadow-lg rounded-3xl p-6 flex">
            <img src={PrintfulLogo} />
          </div>
          <BrandCard
            className=" w-[5rem] text-sm -bottom-4 text-nowrap  "
            text="And more "
          />
          <BrandCard
            className=" w-[6rem] p-4 text-sm -left-24 bottom-24   "
            img={BirdImage}
          />
          <BrandCard
            className=" w-[5rem] text-sm p-4 -top-4 right-0 text-nowrap "
            img={SquareSpaceImage}
          />
          <BrandCard
            className="w-[3rem] p-4 md:w-[6rem] text-sm -right-[9rem] bottom-24  "
            img={WooImage}
          />
          <BrandCard
            className=" p-4 w-[6rem] text-sm -top-16 left-0 text-nowrap "
            img={Tree}
          />
        </div>
        {/* outer */}
        <BrandCard
          className="w-[5rem] md:w-[10rem] bottom-0 font-bold text-_gray/75 uppercase text-2xl "
          text="api"
        />
        <BrandCard
          className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] p-4 -bottom-8 left-1/2"
          img={ShopifyImage}
        />
        <BrandCard
          className=" w-[5rem] md:w-[10rem] p-4 object-contain right-0 bottom-8 "
          img={EtsyImage}
        />
        <BrandCard
          className="w-[3.5rem] md:w-[7rem] right-0 top-0 p-4 "
          img={WixImage}
        />
      </div>
    </div>
  );
};

export default Stores;
