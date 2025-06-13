import { Link } from "react-router-dom";
import img from "../../../assets/images/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.avif";

const blogs = [
  { id: 1, image: img, isNew: true },
  { id: 2, image: img, isNew: true },
  { id: 3, image: img, isNew: true },
  { id: 4, image: img, isNew: true },
  { id: 5, image: img, isNew: true },
  { id: 6, image: img, isNew: true },
  { id: 7, image: img, isNew: true },
  { id: 8, image: img, isNew: true },
];

const Card = ({ limit }) => {
  const displayBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Link to="/single-page">
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
            </Link>
          </div>
        ))}
      </div>

      {limit && (
        <div className="p-4">
          <Link to="/blog">
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500">
                Browse more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
