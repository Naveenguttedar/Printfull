const Card = ({
  feature,
  img,
  title,
  description,
}: {
  feature: string;
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex-1 flex flex-col items-center md:place-items-start">
      <img className="w-[10rem] object-cover " src={img} />
      <div className="p-6 text-center md:text-left ">
        <h4 className="uppercase text-_green font-bold ">{feature}</h4>
        <h2>{title}</h2>
        <p className="text-sm min-w-[15rem] pt-2 text-_gray/75 pb-4 pr-2">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
