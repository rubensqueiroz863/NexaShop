export default function HeroCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 text-(--text-light)">
      
      <div className="bg-[#01c8a1] bg-[url('/images/apple.png')] bg-no-repeat bg-bottom-right bg-size-[110px] lg:bg-size-[130px] p-5 lg:p-6 rounded-3xl flex items-center min-h-[130px] lg:min-h-[150px]">
        <div>
          <p className="text-sm lg:text-lg text-white/80 leading-tight">Apple</p>
          <p className="font-bold text-lg lg:text-xl leading-tight">New Products</p>
          <button className="border mt-2 border-white rounded-full px-3 py-0.5 text-sm cursor-pointer hover:opacity-70 transition-all">
            Shop
          </button>
        </div>
      </div>

      <div className="bg-[#101010] bg-[url('/images/quadcopter.png')] bg-no-repeat bg-right bg-size-[100px] lg:bg-size-[130px] p-5 lg:p-6 rounded-3xl flex items-center min-h-[130px] lg:min-h-[150px]">
        <div>
          <p className="text-sm lg:text-lg text-white/80 leading-tight">Flying</p>
          <p className="font-bold text-lg lg:text-xl leading-tight">Quadcopter</p>
          <button className="border mt-2 border-white rounded-full px-3 py-0.5 text-sm cursor-pointer hover:opacity-70 transition-all">
            Shop
          </button>
        </div>
      </div>

      <div className="bg-[#fc9614] bg-[url('/images/clean.png')] bg-no-repeat bg-right bg-size-[90px] lg:bg-size-[120px] p-5 lg:p-6 rounded-3xl hidden md:flex items-center min-h-[130px] lg:min-h-[150px]">
        <div>
          <p className="text-sm lg:text-lg text-white/80 leading-tight">Clean</p>
          <p className="font-bold text-lg lg:text-xl leading-tight">Your Home</p>
          <button className="border mt-2 border-white rounded-full px-3 py-0.5 text-sm cursor-pointer hover:opacity-70 transition-all">
            Shop
          </button>
        </div>
      </div>

      <div className="bg-[#8c24e1] bg-[url('/images/drink.png')] bg-no-repeat bg-right bg-size-[70px] lg:bg-size-[100px] p-5 lg:p-6 rounded-3xl hidden md:flex items-center min-h-[130px] lg:min-h-[150px]">
        <div>
          <p className="text-sm lg:text-lg text-white/80 leading-tight">Drink</p>
          <p className="font-bold text-lg lg:text-xl leading-tight">Coffee</p>
          <button className="border mt-2 border-white rounded-full px-3 py-0.5 text-sm cursor-pointer hover:opacity-70 transition-all">
            Shop
          </button>
        </div>
      </div>

      <div className="bg-[#ff0101] bg-[url('/images/play.png')] bg-no-repeat bg-right bg-size-[70px] lg:bg-size-[120px] p-5 lg:p-6 rounded-3xl hidden xl:flex items-center min-h-[130px] lg:min-h-[150px]">
        <div>
          <p className="text-sm lg:text-lg text-white/80 leading-tight">Play</p>
          <p className="font-bold text-lg lg:text-xl leading-tight">Games</p>
          <button className="border mt-2 border-white rounded-full px-3 py-0.5 text-sm cursor-pointer hover:opacity-70 transition-all">
            Shop
          </button>
        </div>
      </div>

    </div>
  );
}