import { ProductImage1 } from "../assets";
import Card from "./Card";
import data from "../assets/data.json";
const Products = () => {
  return (
    <div className="bg-_lightGray  py-[2rem] px-[2rem] md:px-[10rem]">
      <div className=" flex flex-col md:flex-row justify-between place-items-end ">
        <div className="flex-1 md:h-full h-[20rem] ">
          <img
            src={ProductImage1}
            className="object-cover w-full h-full rounded-t-[1rem] md:rounded-[1rem]"
          />
        </div>
        <div className="flex-1 bg-white space-y-4 px-8  md:px-[8rem] py-[6rem] rounded-b-[1rem] md:rounded-r-3xl ">
          <h3 className=" text-xl md:text-2xl font-sansJoseph font-bold  ">
            Easily add your design to a wide range of products
          </h3>
          <p className=" text-sm text-_gray/75 pb-4 pr-2">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <span className="text-_green flex gap-2 place-items-center cursor-pointerj">
            All products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#39b75d"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="pt-8 overflow-x-auto ">
        <div className="flex justify-between gap-2 py-4 flex-shrink-0 w-screen md:w-full">
          {data.ProductFeatures.map((item, index) => {
            return (
              <Card
                key={index}
                feature={item.feature}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
