const blogRouter = require("express").Router();
const blogController = require("../../controller/admin/blog/blogController");
const asyncErrorHandle = require("../../services/asyncErrorHandle");
const isLoggedIn = require("../../middleware/middleware");

blogRouter
  .route("/blog")
  .post(isLoggedIn, asyncErrorHandle(blogController.createBlog))
  .get(asyncErrorHandle(blogController.getBlog));

blogRouter
  .route("/blog/:id")
  .patch(isLoggedIn, asyncErrorHandle(blogController.updateBlog))
  .delete(isLoggedIn, asyncErrorHandle(blogController.deleteBlog))
  .get(asyncErrorHandle(blogController.singleBlog));

module.exports = blogRouter;
