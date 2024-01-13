"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const useGetTask = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleGetTask = async (taskId) => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.getTask(taskId);
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
        "You have successfully fetched the task",
        "Success"
      );
      console.log(tx);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      NotificationHandler(
        "DigiFreelance hub",
        "Error during task creating",
        "Error"
      );
      throw err;
    }
  };

  return { isLoading, handleGetTask };
};

export default useGetTask;
