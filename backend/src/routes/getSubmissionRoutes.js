const getSubmission = require("../controllers/getSubmission");

module.exports = getReviewsRoutes = {
  path: "/reviews/:id",
  method: "get",
  handler: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await getSubmission(id);
      return res.status(200).send({
        message: "Project Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Project not found!",
        response: err,
      });
    }
  },
};
