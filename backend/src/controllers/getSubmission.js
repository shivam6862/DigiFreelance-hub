const Submission = require("../models/submission");

module.exports = getSubmission = async ({ id }) => {
  try {
    const responseSubmission = await Submission.find({
      id: id,
    });
    return responseSubmission;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
