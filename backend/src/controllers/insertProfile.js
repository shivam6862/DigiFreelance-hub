const Profile = require("../models/profile");

module.exports = insertProfileRoutes = async (data) => {
  try {
    const UserProfile = new Profile(data);
    const responseUserProfile = await UserProfile.save();
    return responseUserProfile;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
