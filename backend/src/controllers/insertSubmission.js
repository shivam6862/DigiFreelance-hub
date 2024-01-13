const Submission = require("../models/submission");

module.exports = insertSubmissionRoutes = async (data) => {
  try {
    const jobSubmission = new Submission(data);
    const responsejobSubmission = await jobSubmission.save();
    return responsejobSubmission;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
