import Product from "./Product";

const productData = [
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
    img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    name: "Avocado",
    price: "$99.99",
  },
  {
    img: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0fGVufDB8fDB8fHww",
    name: "Pineapple",
    price: "$19.99",
  },
  {
    img: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0fGVufDB8fDB8fHww",
    name: "Cherry",
    price: "$29.99",
  },
  {
    img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    name: "Banana",
    price: "$15.00",
  },
];
const Discount = () => {
  return (
    <div className="py-20">
      <div className="container ">
        <h2 className="text-xl md:text-4xl pb-4 sm:pb-0 hover:text-primaryDark cursor-pointer">Discount</h2>
        {/* grid */}
        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <div className="relative w-fit mx-auto ">
            <img
              className="h-full object-cover "
              src="/public/discount-bg.jpg"
              alt=""
            />
            <div className="absolute w-full h-full top-0 left-0 grid place-items-center text-white  ">
              <div className="text-xl flex flex-col gap-4 ">
                <h2 className="text-[40px] font-bold ">$20</h2>
                <div>
                  <p>Under Products</p>
                  <p>Limited Time Only</p>
                </div>
              </div>
            </div>
          </div>

          {productData.map((product) => (
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

export default Discount;
