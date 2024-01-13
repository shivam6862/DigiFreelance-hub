const Profile = require("../models/profile");

module.exports = getProfile = async ({ projectAddress }) => {
  try {
    const responseProfile = await Profile.find({
      projectAddress: projectAddress,
    });
    return responseProfile;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
