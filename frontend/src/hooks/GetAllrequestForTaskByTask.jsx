"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const useGetAllrequestForTaskByTask = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleGetAllrequestForTaskByTask = async (_id) => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.getAllrequestForTaskByTask(_id);
      if (tx == "First Connect To Wallet") {
        NotificationHandler(
          "DigiFreelance hub",
          "First Connect To Wallet",
          "Error"
        );
        setIsLoading(false);
        return false;
      }
      NotificationHandler(
        "DigiFreelance hub",
        "Get all requestForTask by task successfully",
        "Success"
      );
      console.log(tx);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      NotificationHandler(
        "DigiFreelance hub",
        "Error during getting all requestForTask by task",
        "Error"
      );
      throw err;
    }
  };

  return { isLoading, handleGetAllrequestForTaskByTask };
};

export default useGetAllrequestForTaskByTask;
