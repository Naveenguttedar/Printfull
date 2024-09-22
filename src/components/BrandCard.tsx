const BrandCard = ({
  className,
  img,
  text,
}: {
  className: string;
  text?: string;
  img?: string;
}) => {
  return (
    <div
      className={`absolute aspect-square shadow-brandCard rounded-3xl hover:shadow-xl cursor-pointer flex ${className}`}
    >
      {text && <span className="m-auto">{text}</span>}
      {img && (
        <img src={img} alt="brand-card" className="w-full  object-contain" />
      )}
    </div>
  );
};
export default BrandCard;
