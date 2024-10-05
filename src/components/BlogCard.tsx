interface PropsType {
  img: string;
  desc: string;
}
const BlogCard = ({ img, desc }: PropsType) => {
  return (
    <div className="hover:shadow-2xl cursor-pointer hover:scale-105 ">
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="px-6 py-8 bg-white">
        <div className="flex justify-between items-center text-gray-500 pb-4 ">
          <p>By:Admin</p>
          <p>14 Aug 2024</p>
        </div>
        {desc}
      </div>
    </div>
  );
};

export default BlogCard;
