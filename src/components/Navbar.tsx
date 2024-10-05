import { CiUser } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="bg-white md:bg-primaryDark ">
        <div className="container justify-between items-center py-3 hidden md:flex ">
          <div className="flex gap-8 items-center ">
            {/* <h2 className="text-white text-[40px] ">VEGGY SHOP</h2> */}
            <img
              className=" h-[50px] w-[50px] rounded-full object-cover "
              src="https://www.pngitem.com/pimgs/m/75-759411_clip-art-shop-logo-transparent-shop-logo-png.png"
              alt=""
            />
            <div className="relative ">
              <input
                className="px-4 py-3 rounded-sm w-[300px] "
                type="text"
                placeholder="Search.."
              />
            </div>
          </div>
          <div className="text-white flex gap-6 text-[26px] ">
            <CiUser />

            <div className="relative">
              <AiOutlineShopping />
              <div className="bg-red-600 w-[20px] grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px] ">
                0
              </div>
            </div>
            <RiMenu2Line />
          </div>
        </div>
        {/* visible in tb or mob */}
        <div className="container flex justify-between items-center text-[26px] py-4 md:hidden  ">
          <RiMenu2Line />
          <div>VeggyStore</div>
          <div className="relative ">
            <AiOutlineShopping />
            <div className="bg-red-600 w-[20px] h-[20px] text-white grid place-items-center tetx-[12px] rounded-full absolute right-[-10px] top-[15px] ">
              0
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary hidden md:block ">
        <ul className="container flex gap-8 uppercase py-4 text-white ">
          <a className="hover:text-primaryDark cursor-pointer" href="#">
            Home
          </a>
          <a className="hover:text-primaryDark cursor-pointer" href="#">
            Shop
          </a>
          <a className="hover:text-primaryDark cursor-pointer" href="#">
            Blog
          </a>
          <a className="hover:text-primaryDark cursor-pointer" href="#">
            Pages
          </a>
          <a className="hover:text-primaryDark cursor-pointer" href="#">
            About
          </a>
          <a className="hover:text-primaryDark cursor-pointer" href="#">
            Contact
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
