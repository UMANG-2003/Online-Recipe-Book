"use client";
import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";
import AddRecipe from "./components/AddRecipe";
function Home() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl relative">
        <img
          width={270}
          className="absolute top-32 left-[40%] rotate-[30%]"
          src="/arrow.png"
          alt=""
        />
        <div className="flex justify-around items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-5xl font-bold text-red-500">
                Discover, Cook, and Share
              </p>
              <p className="text-5xl font-bold text-red-500">
                the Joy of Flavors...
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <img width={60} src="/avatar.jpg" alt="" />
              <div>
                <p className="text-gray-500 text-sm font-light">
                  You’re Just One Click Away from{" "}
                </p>
                <p className="text-gray-500 text-sm font-light">
                  {" "}
                  Discovering Your Next Favorite Recipe
                </p>
              </div>
            </div>

            <div className="px-3 flex flrx-col gap-3">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Recipes
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                About Us
              </button>
            </div>
          </div>

          <div>
            <img width={420} src="/pic1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl relative">
        <h1 className="font-bold text-3xl text-center py-5">Cuisines</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {[
              { srcs: "/indian.jpg", name: "Indian" },
              { srcs: "/italian.jpg", name: "Italian" },
              { srcs: "/chinese.jpeg", name: "Chinese" },
              { srcs: "/japanese.jpg", name: "Japanese" },
              { srcs: "/mexican.jpg", name: "Mexican" },
              { srcs: "/thai.jpeg", name: "Thai" },
              { srcs: "/french.jpg", name: "French" },
              { srcs: "/indonesian.jpg", name: "Indonesian" },
              { srcs: "/greek.png", name: "Greek" },
              { srcs: "/korean.jpg", name: "Korean" },
            ].map((item, index) => {
              return (
                <div
                  className="m-1 rounded-lg text-center cursor-pointer"
                  key={index}
                >
                  <div>{item.name}</div>
                  <img
                    className="mx-auto my-5 rounded-xl w-52 h-52"
                    src={item.srcs}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl p-8 relative">
        <div className="flex justify-between">
          <img
            className="rounded-2xl"
            src="/cookbook.webp"
            width={500}
            alt=""
          />
          <p className="mx-10">
            Welcome to Cookbook, your ultimate destination for exploring,
            creating, and sharing a vibrant world of mouthwatering recipes that
            bring joy, flavor, and inspiration to your kitchen. At Cookbook, we
            believe that cooking is more than a task—it’s an art form, a way of
            expressing creativity, and a powerful means of connecting with
            cultures, traditions, and the people you love. Whether you’re a
            seasoned chef striving to refine your culinary expertise, a
            passionate foodie looking to experiment with bold flavors, or a
            curious beginner eager to embark on your cooking journey, we are
            here to spark your imagination and guide you every step of the way.
            Dive into the rich tapestry of global cuisines, from the aromatic
            spices of Moroccan tagines to the comforting warmth of Italian
            risottos, from savory street foods of Asia to decadent desserts from
            around the world. Unearth family treasures that have stood the test
            of time and learn cutting-edge techniques to elevate your dishes to
            restaurant-quality creations. Our ever-growing library of recipes,
            paired with expert tips, detailed tutorials, and an engaging
            community of food lovers, ensures that every visit to Cookbook
            leaves you inspired and empowered. But Cookbook is more than just a
            website—it’s a gateway to discovery. It’s where food meets passion,
            and where every recipe tells a story. Whether you’re hosting a
            dinner party, searching for quick weeknight meals, or looking to
            recreate the dishes of your childhood, we’re here to help you turn
            ordinary ingredients into extraordinary experiences. Step into a
            world of culinary possibilities and let Cookbook transform the way
            you cook, share, and savor every bite.
            <button
              type="button"
              className="ml-2 text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:focus:ring-pink-800 dark:hover:bg-pink-500"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </p>
        </div>
      </div>

      <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl p-5 relative">
        <h1 className="text-center text-3xl mb-9">Trending Recipes</h1>
        <div className="flex gap-5">
          {[
            {
              srcs: "/cake.jpg",
              name: " Banana Cake With Chunky Dark Chocolate",
            },
            {
              srcs: "/egg.gif",
              name: "Feta Fried Eggs",
            },
            {
              srcs: "/soup.gif",
              name: "French Onion Soup Potatoes",
            },
            {
              srcs: "/coffie.jpg",
              name: "Whipped Coffee",
            },
            {
              srcs: "/sandwich.jpg",
              name: "Grinder Sandwich",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="w-56 border-2 border-black rounded-2xl p-3 shadow-xl bg-yellow-100 flex flex-col gap-4"
              >
                <img
                  src={item.srcs}
                  className="w-52 h-64 rounded-2xl border-2 border-black"
                  alt=""
                />
                <div className="flex flex-col justify-between h-24 gap-2">
                  <p className="text-sm text-gray-800 text-center">
                    {item.name}
                  </p>
                  <button
                    type="button"
                    className=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl p-5 relative "
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AddRecipe></AddRecipe>
      </div>
    </>
  );
}

export default Home;
