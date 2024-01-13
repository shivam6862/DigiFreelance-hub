"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const getAllTasks = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleGetAllTasks = async () => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.getAllTasks();
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
        "You have successfully fetched all tasks",
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

  return { isLoading, handleGetAllTasks };
};

export default getAllTasks;
