

const Header = () => {
  return (
    <div className="w-screen bg-white text-black">
      <div className="flex flex-col">
        <div className="flex h-9 justify-end w-full py-2 px-10">
          <div className="flex gap-5 text-sm">
            <p className="font-normal">Help</p>
            <p className="font-normal">Orders & Returns</p>
            <p className="font-normal">Hi, Rohit</p>
          </div>
        </div>
        <div className="flex px-10 justify-between py-5 items-center flex-col md:flex-row">
          <div className="font-bold text-4xl">ECOMMERCE</div>
          <div className="flex gap-8 font-semibold text-lg flex-col md:flex-row items-center">
            <p>Categories</p>
            <p>Sale</p>
            <p>Clearance</p>
            <p>New stock</p>
            <p>Trending</p>
          </div>
          <div className="flex gap-8 items-center">
            <img src="/public/Search.png" alt="search" className="h-8 w-8"/>
            <img src="/public/Cart.png" alt="Cart" className="h-8 w-8"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
