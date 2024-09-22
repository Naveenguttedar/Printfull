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
      className={`absolute aspect-square shadow-brandCard rounded-3xl  flex ${className}`}
    >
      {text && <span className="m-auto">{text}</span>}
      {img && (
        <img
          src={img}
          alt="brand-card"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
export default BrandCard;
