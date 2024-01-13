"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const useGetTaskTimeToComplete = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleGetTaskTimeToComplete = async (taskId) => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.getTaskTimeToComplete(taskId);
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
        "Got task time to complete successfully",
        "Success"
      );
      console.log(tx);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      NotificationHandler(
        "DigiFreelance hub",
        "Error during getting task time to complete",
        "Error"
      );
      throw err;
    }
  };

  return { isLoading, handleGetTaskTimeToComplete };
};

export default useGetTaskTimeToComplete;
