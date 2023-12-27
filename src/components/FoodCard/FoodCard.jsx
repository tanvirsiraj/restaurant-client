const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-[#F3F3F3]  border-none rounded-none">
      <figure>
        <img src={image} className="w-full" alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute  right-0  mr-4 mt-4 px-4 py-1 font-primary">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title text-2xl font-primary">{name}</h2>
        <p className="text-[#737373] font-primary">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 text-xl font-[500px] mt-6 border-[#BB8506] hover:bg-[#111827] hover:text-[#BB8506] hover:border-[#BB8506]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
