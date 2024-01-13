const getProfile = require("../controllers/getProfile");

module.exports = getReviewsRoutes = {
  path: "/reviews/:walletAddress",
  method: "get",
  handler: async (req, res) => {
    try {
      const { walletAddress } = req.params;
      const response = await getProfile(walletAddress);
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
