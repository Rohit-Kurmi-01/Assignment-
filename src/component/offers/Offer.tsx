

const Offers = () => {
  return (
    <div className="flex w-full h-9 justify-center items-center bg-[#F4F4F4] p-2 md:p-4">
      <div className="flex justify-center items-center text-black gap-4 md:gap-6 px-2 md:px-4 mx-4 md:mx-8">
        <span className="h-4 w-4 md:h-6 md:w-6">
          <img src="/public/Frame.png" alt="right arrow" className="h-full w-full" />
        </span>
        <span className="text-sm md:text-base">Get 10% off on business sign up</span>
        <span className="h-4 w-4 md:h-6 md:w-6">
          <img src="/public/Frame (1).png" alt="left arrow" className="h-full w-full" />
        </span>
      </div>
    </div>
  );
}

export default Offers;
