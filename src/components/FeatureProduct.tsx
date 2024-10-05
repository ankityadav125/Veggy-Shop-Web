import Product from "./Product";

const productData = [
  {
    img: "/public/product-1.jpg",
    name: "Organic Bartlett Pear",
    price: "$35.90",
  },
  {
    img: "/public/product-2.jpg",
    name: "Organi Strawberries, 1 lb",
    price: "$79.99",
  },
  {
    img: "/public/product-3.jpg",
    name: "Blueberry Organic ,6 Ounce",
    price: "$999",
  },
  {
    img: "/public/product-4.jpg",
    name: "Kiwi Organic, 1 Each ",
    price: "$350.90",
  },
  {
    img: "/public/product-5.jpg",
    name: "Organic Banana",
    price: "$99",
  },
  {
    img: "/public/product-6.jpg",
    name: "McCormick Organic",
    price: "$55.90",
  },
  {
    img: "/public/product-7.jpg",
    name: "Organic Broccoli",
    price: "$29.90",
  },
  {
    img: "/public/product-8.jpg",
    name: "Blueberry",
    price: "$35.90",
  },
  {
    img: "/public/product-9.jpg",
    name: "Dried Pineapple fruit Bar",
    price: "$999.99",
  },
  {
    img: "/public/product-10.jpg",
    name: "Holiday Nuts Gift Basket",
    price: "$399.90",
  },
];

const FeatureProduct = () => {
  return (
    <div className="pt-20 ">
      <div className="container ">
        <div className="sm:flex justify-between items-center ">
          <div className="text-xl md:text-4xl pb-4 sm:pb-0 hover:text-primaryDark cursor-pointer">
            Feature Product
          </div>
          <div className="flex gap-8 items-center text-[14px] md:text-lg ">
            <button className="border-b border-[#000] hover:text-primaryDark cursor-pointer">Best Seller</button>
            <button className="hover:text-primaryDark cursor-pointer">Most Popular</button>
          </div>
        </div>

        {/* grid */}
        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productData.map((product)=>(
            <Product
            key={product.name}
            img={product.img}
            name={product.name}
            price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
