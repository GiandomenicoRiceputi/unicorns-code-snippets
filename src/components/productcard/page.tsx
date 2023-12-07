import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

interface IProduct {
  id: number;
  name: string;
  color: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
}

export type Theme = "base" | "rainforest" | "candy";

const ProductPage = ({
  product,
  theme,
}: {
  product: IProduct;
  theme: Theme;
}) => {
  return (
    <section className="bg-primary-50" data-theme={theme}>
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-primary-900">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-primary-500">{product.color}</p>
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
          aria-label={`Add to bag, ${product.name}`}
        >
          Add to bag
        </button>
      </div>
    </section>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.oneOf(["base", "rainforest", "candy"]).isRequired,
};

export default ProductPage;
