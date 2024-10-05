import BlogCard from "./BlogCard";

const blogData = [
  {
    img: "/public/post-1.jpg",
    desc: "Simple Description 1 some more text just to make UI a title attractive that all.",
  },
  {
    img: "/public/post-2.jpg",
    desc: "Simple Description 1 some more text just to make UI a title attractive that all.",
  },
  {
    img: "/public/post-3.jpg",
    desc: "Simple Description 1 some more text just to make UI a title attractive that all.",
  },
  {
    img: "/public/post-4.jpg",
    desc: "Simple Description 1 some more text just to make UI a title attractive that all.",
  },
];

const Blogs = () => {
  return (
    <div className="py-20">
      <div className="container ">
        <h2 className="text-xl md:text-4xl pb-4 sm:pb-0 hover:text-primaryDark cursor-pointer ">Our Blogs</h2>

        {/* grid */}
        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
          {blogData.map((blog,index) => (
            <BlogCard
              key={index}
              img={blog.img}
             desc={blog.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
