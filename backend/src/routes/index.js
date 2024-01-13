const getProfileRoutes = require("./getProfileRoutes");
const getReviewsRoutes = require("./getReviewsRoutes");
const getSubmissionRoutes = require("./getSubmissionRoutes");
const insertSubmissionRoutes = require("./insertSubmissionRoutes");
const insertReviewRoutes = require("./insertReviewsRoutes");
const insertProfileRoutes = require("./insertProfileRoutes");

module.exports = routes = [
  getProfileRoutes,
  getReviewsRoutes,
  getSubmissionRoutes,
  insertSubmissionRoutes,
  insertReviewRoutes,
  insertProfileRoutes,
];
