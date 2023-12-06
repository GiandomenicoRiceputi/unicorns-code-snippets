"use client";

import Image from "next/image";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 2,
    name: "Medium Cotton Tote Bag",
    color: "Natural",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg",
    imageAlt:
      "Front of tote bag with natural canvas, canvas handles, and white print.",
    price: "$50",
  },
  {
    id: 3,
    name: "Large Canvas Tote Bag",
    color: "Blue",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-03.jpg",
    imageAlt:
      "Front of tote bag with blue canvas, canvas handles, and white print.",
    price: "$60",
  },
  {
    id: 4,
    name: "Leather Wallet",
    color: "Brown",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-04.jpg",
    imageAlt:
      "Front of leather wallet with traditional folding design and brown color.",
    price: "$90",
  },
  {
    id: 5,
    name: "Leather Card Case",
    color: "Black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Front of leather card case with black color and traditional design.",
    price: "$85",
  },
  {
    id: 6,
    name: "Eco Tote Bag",
    color: "Green",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Front of tote bag with green canvas made from recycled materials.",
    price: "$40",
  },
  {
    id: 7,
    name: "Eco Travel Bag",
    color: "Black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Front of travel bag with black canvas made from recycled materials and black straps.",
    price: "$100",
  },
];

// "rainforrest", "candy"

export default function Home() {
  const [theme, setTheme] = useState("base");

  const handleTheme = () => {
    if (theme === "rainforest") setTheme("base");
    if (theme === "candy") setTheme("rainforest");
    if (theme === "base") setTheme("candy");
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <button
          data-theme={theme}
          className="w-full mb-5 rounded-md border border-transparent bg-primary-500 px-4 py-3 text-base font-medium text-primary-50 shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-50"
          onClick={handleTheme}
        >
          Click To Change Theme
        </button>
        <h2 className="text-xl font-bold text-primary-900">
          Customers also bought
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="bg-primary-50" data-theme={theme} key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-primary-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary-500">
                    {product.color}
                  </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-primary-200">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-primary-500 px-4 py-3 text-base font-medium text-primary-50 shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
