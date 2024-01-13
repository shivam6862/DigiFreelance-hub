"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const useTransferRewardToSolver = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleTransferRewardToSolver = async (taskId) => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.transferRewardToSolver(taskId);
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
        "Task reward transfered to solver successfully",
        "Success"
      );
      console.log(tx);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      NotificationHandler(
        "DigiFreelance hub",
        "Error during reward transfering to solver",
        "Error"
      );
      throw err;
    }
  };

  return { isLoading, handleTransferRewardToSolver };
};

export default useTransferRewardToSolver;
