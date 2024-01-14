import ProfileTemplate from "@/components/Profile/ProfileTemplate";
import UserProfileInput from "@/components/profile/UserProfileInput";
import Header from "@/components/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileTemplate title="Edit Profile">
        <UserProfileInput />
      </ProfileTemplate>
    </>
  );
};

export default Profile;
