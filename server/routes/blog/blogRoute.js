const blogRouter = require("express").Router();
const blogController = require("../../controller/admin/blog/blogController");

blogRouter
  .route("/blog")
  .post(blogController.createBlog)
  .get(blogController.getBlog);

blogRouter
  .route("/blog/:id")
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog)
  .get(blogController.singleBlog);

module.exports = blogRouter;
