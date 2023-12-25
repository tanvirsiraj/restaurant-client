const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex  space-x-3">
      <img className="w-[120px] rounded-[200px] rounded-tl-none" src={image} />
      <div>
        <h3 className="text-xl font-logo font-normal uppercase text-[#151515] mb-2">
          {name} ------------------
        </h3>
        <p className="text-base font-primary font-normal text-[#737373]">
          {recipe}
        </p>
      </div>
      <p className="text-xl font-primary text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
