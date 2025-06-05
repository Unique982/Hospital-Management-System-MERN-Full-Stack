import { Link } from "react-router-dom";
import img from "../../../assets/images/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.avif";
const blogs = [
  { id: 1, image: img, isNew: true },
  { id: 2, image: img, isNew: true },
  { id: 3, image: img, isNew: true },
  { id: 4, image: img, isNew: true },
  { id: 5, image: img, isNew: true },
  {
    id: 6,
    image: img,
    isNew: true,
  },
];
const Card = () => {
  return (
    <>
      <Link to="/single-page">
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  className="w-full h-56 object-cover"
                  src={blog.image}
                  alt="Blog"
                />
                {blog.isNew && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-2 py-1 m-2 rounded-md text-sm">
                    New
                  </div>
                )}
                <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                  3 min read
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Title
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  auctor, mi sed egestas tincidunt, libero dolor bibendum nisl.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};
export default Card;
