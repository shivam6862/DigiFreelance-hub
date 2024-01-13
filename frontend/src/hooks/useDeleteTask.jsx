"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const useDeleteTask = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleDeleteTask = async (taskId) => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.deleteTask(taskId);
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
        "Task deleted successfully",
        "Success"
      );
      console.log(tx);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      NotificationHandler(
        "DigiFreelance hub",
        "Error during deleting task",
        "Error"
      );
      throw err;
    }
  };

  return { isLoading, handleDeleteTask };
};

export default useDeleteTask;
