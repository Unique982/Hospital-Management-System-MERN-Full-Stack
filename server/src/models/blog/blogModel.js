const blogModel = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blogs", {
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogTag: {
      type: DataTypes.STRING,
    },
  });
  return Blog;
};
module.exports = blogModel;
