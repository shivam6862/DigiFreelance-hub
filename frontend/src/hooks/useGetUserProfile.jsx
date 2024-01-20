import { useNotification } from "./useNotification";

const useGetUserProfile = () => {
  const { NotificationHandler } = useNotification();
  const getUserProfile = async (new_wallet) => {
    try {
      const headers = new Headers({
        "Content-Type": "application/json",
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${new_wallet}`,
        {
          method: "get",
          headers: headers,
        }
      );
      const resData = await response.json();
      console.log(resData);
      NotificationHandler("DigiFreelance hub", response.message, "Success");
      return {
        firstName: resData.response[0].firstName,
        lastName: resData.response[0].lastName,
        description: resData.response[0].description,
        credits: resData.response[0].credits,
        walletAddress: resData.response[0].walletAddress,
      };
    } catch (err) {
      console.log(err);
      NotificationHandler("DigiFreelance hub", "Something went wrong", "Error");
      return {
        firstName: "Unknown",
        lastName: "Unknown",
        description: "Unknown",
        credits: 0,
        walletAddress: new_wallet,
      };
    }
  };
  return { getUserProfile };
};

export default useGetUserProfile;
