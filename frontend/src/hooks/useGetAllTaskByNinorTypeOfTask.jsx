"use client";

import { useContract } from "@/contexts/contractContext";
import { useState } from "react";
import { useNotification } from "./useNotification";

const useGetAllTaskByNinorTypeOfTask = () => {
  const { NotificationHandler } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const contractInstance = useContract();

  const handleGetAllTaskByNinorTypeOfTask = async (_id) => {
    try {
      setIsLoading(true);
      const tx = await contractInstance.getAllTaskByNinorTypeOfTask(_id);
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
        "Get all task by MinorTypeOfTask successfully",
        "Success"
      );
      console.log(tx);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      NotificationHandler(
        "DigiFreelance hub",
        "Error during getting all task by MinorTypeOfTask",
        "Error"
      );
      throw err;
    }
  };

  return { isLoading, handleGetAllTaskByNinorTypeOfTask };
};

export default useGetAllTaskByNinorTypeOfTask;
