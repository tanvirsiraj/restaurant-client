import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div className="grid md:grid-cols-2  gap-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn btn-outline text-black border-0 border-b-4 text-xl mt-6 ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
