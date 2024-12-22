function Navbar() {
  return (
    <nav className="px-[5vw] py-3 flex justify-between items-center">
      <div className="box flex gap-2 items-center cursor-pointer">
        <img
          width={45}
          src="/logo.png"
          className="rounded-full"
          alt="CookBook Logo"
        />
        <div className="text-3xl">CookBook</div>
      </div>

      <ul className="flex gap-9 items-center pt-3">
        {[
          { label: "Home", barWidth: "w-12" },
          { label: "Recipe Book", barWidth: "w-24" },
          { label: "New Recipes", barWidth: "w-24" },
          { label: "Favourites", barWidth: "w-20" },
        ].map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-center items-center"
          >
            <li className="menu text-lg cursor-pointer">{item.label}</li>
            <div
              className={`bar ${item.barWidth} bg-black h-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center`}
            ></div>
          </div>
        ))}
      </ul>

      <div className="flex gap-2 items-center pt-3">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Login
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
        >
          SignUP
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
