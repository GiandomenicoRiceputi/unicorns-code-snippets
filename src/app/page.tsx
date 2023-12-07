"use client";

import { useTheme } from "@/app/layout";
import ProductPage, { Theme } from "@/components/productcard/page";

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

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-primary-900">
          Customers also bought
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductPage
              product={product}
              theme={theme as Theme}
              key={product.id}
            ></ProductPage>
          ))}
        </div>
      </div>
    </div>
  );
}
