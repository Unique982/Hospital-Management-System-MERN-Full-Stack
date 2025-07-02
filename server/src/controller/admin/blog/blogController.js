const { blogs } = require("../../../database/connection");

exports.createBlog = async (req, res) => {
  const { blogTitle, blogDescription, blogAuthor, blogCategory, blogTag } =
    req.body;
  const blogImage = req.file ? req.file.path : "uniqe.png";

  if (
    !blogTitle ||
    !blogDescription ||
    !blogAuthor ||
    !blogCategory ||
    !blogImage
  ) {
    return res.status(400).json({ message: "all field are required!" });
  }
  await blogs.create({
    blogTitle,
    blogDescription,
    blogAuthor,
    blogCategory,
    blogImage,
    blogTag,
  });
  res.status(200).json({ message: "blog added successfully!" });
};
// get blog
exports.getBlog = async (req, res) => {
  const blogData = await blogs.findAll();
  res.status(200).json({ message: "blog get successfully!", data: blogData });
};

// update blog
exports.updateBlog = async (req, res) => {
  const id = req.params.id;
  const { blogTitle, blogDescription, blogAuthor, blogCategory, blogTag } =
    req.body;
  const blogImage = req.file ? req.file.path : "uniqe.png";

  const blogId = await blogs.findByPk(id);
  if (!blogId) {
    return res.status(404).json({ message: "blog id not found!" });
  }
  await blogs.update(
    {
      blogTitle,
      blogDescription,
      blogAuthor,
      blogCategory,
      blogImage,
      blogTag,
    },
    {
      where: {
        id,
      },
    }
  );
  res.status(200).json({ message: "update successfully!" });
};

// delete blog
exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  const blogId = await blogs.findByPk(id);
  if (!blogId) {
    return res.status(404).json({ message: "Blog id not found!" });
  }
  await blogs.destroy({ where: { id } });
  res.status(200).json({ message: "delete successfully!" });
};

// single blovg
exports.singleBlog = async (req, res) => {
  const id = req.params.id;
  const blogId = await blogs.findByPk(id);
  if (!blogId) {
    return res.status(404).json({ message: "blog id not found!" });
  }
  const blogData = await blogs.findOne({ where: { id } });
  res.status(200).json({ message: "single blog get!", data: blogData });
};
