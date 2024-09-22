import BrandCard from "./BrandCard";

const Stores = () => {
  return (
    <div className="py-[2rem] px-[2rem] md:px-[10rem]">
      <div className="py-8 text-center space-y-4 ">
        <h1 className="text-4xl font-bold font-sansJoseph ">
          Connect your store
        </h1>
        <p className="text-md text-_gray/75">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      <div className=" relative flex border border-1 min-h-[35rem]">
        <div className="m-auto flex relative min-h-[20rem] aspect-square border border-1">
          {/* //inner */}
          <div className=" m-auto bg-_green uppercase w-[8rem] aspect-square shadow-lg rounded-3xl p-6 flex">
            <span className="m-auto">P</span>
          </div>
          <BrandCard
            className=" w-[5rem] text-sm -bottom-4 text-nowrap  "
            text="Add more "
          />
          <BrandCard
            className=" w-[6rem] text-sm -left-24 bottom-24   "
            text="B "
          />
          <BrandCard
            className=" w-[5rem] text-sm -top-4 right-0 text-nowrap "
            text="D "
          />
          <BrandCard
            className=" w-[6rem] text-sm -right-24 bottom-24  "
            text="A "
          />
          <BrandCard
            className=" w-[4.5rem] text-sm top-4 left-0 text-nowrap "
            text="E "
          />
        </div>
        {/* outer */}
        <BrandCard
          className=" w-[10rem] bottom-0 font-bold text-_gray/75 uppercase text-2xl "
          text="api"
        />
        <BrandCard className=" w-[10rem] -bottom-8 left-1/2" text="S" />
        <BrandCard className=" w-[10rem] right-0 bottom-8 " text="W" />
        <BrandCard className=" w-[7rem] right-0 top-0 " text="A" />
      </div>
    </div>
  );
};

export default Stores;
