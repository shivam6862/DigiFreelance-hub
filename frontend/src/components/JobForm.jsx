"use client";
import React, { useState, useEffect } from "react";

import classes from "@/styles/JobForm.module.css";
import useCreateTask from "@/hooks/useCreateTask";
import useChangeUserCredits from "@/hooks/useChangeUserCredits";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { useMetamask } from "@/hooks/useMetamask";
import { useNotification } from "@/hooks/useNotification";

const initialState = {
  title: "Selling Phone Website",
  description:
    "Our e-commerce website specializes in offering a diverse range of cutting-edge smartphones, providing customers with a seamless online shopping experience. Explore our extensive catalog featuring the latest models from top brands, coupled with detailed product descriptions and user reviews for informed decision-making. Enjoy secure transactions, swift checkout, and reliable delivery services. Our user-friendly interface ensures effortless navigation, and responsive design caters to various devices. ",
  reward: 4,
  timeToComplete: 6,
  majorTypeOfTask: "Development",
  minorTypeOfTask: "website-making",
  techStack: "REACT, KAGGLE, NEXTJS, NODEJS, EXPRESSJS, MONGODB, HTML, CSS",
};
const options_majorTypeOfTask = [
  { show: "Development", value: "development" },
  { show: "Design", value: "design" },
];

const options_minorTypeOfTask = [
  { show: "Website making", value: "website-making" },
  { show: "Book Cover design", value: "book-cover-design" },
  { show: "Letterhead design", value: "letterhead-design" },
  { show: "Logo business card", value: "logo-business-card" },
  { show: "Logo design", value: "logo-design" },
  { show: "Mobile app design", value: "mobile-app-design" },
  { show: "Packaging design", value: "packaging-design" },
  { show: "Sticker design", value: "sticker-design" },
  { show: "Tshirt design", value: "tshirt-design" },
  { show: "Website design", value: "website-design" },
];

const JobForm = () => {
  const CHARGE = 3;
  const { changeUserCredits } = useChangeUserCredits();
  const { getUserProfile } = useGetUserProfile();
  const { NotificationHandler } = useNotification();
  const {
    dispatch,
    state: { wallet },
  } = useMetamask();
  const [userProfile, setUserProfile] = useState({});
  console.log(userProfile);
  const { handleCreateTask, isLoading } = useCreateTask();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialState);
    console.log(formData);
    try {
      if (userProfile.credits < CHARGE) {
        NotificationHandler(
          "DigiFreelance hub",
          `Credits is less than ${CHARGE} ETH. Please add more credits to your wallet.`,
          "Error"
        );
        return;
      }
      const response = await handleCreateTask(formData);
      if (response) {
        console.log("Task created successfully");
        const new_user_data = {
          walletAddress: wallet,
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
          description: userProfile.description,
          credits: userProfile.credits - CHARGE,
        };
        const response1 = await changeUserCredits(new_user_data);
        console.log(response1);
      } else console.log("Error during task creating");
      console.log("Task created successfully");
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      throw err;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const func = async () => {
      const response = await getUserProfile(wallet);
      console.log(response);
      setUserProfile(response);
    };
    if (wallet) func();
  }, [wallet]);
  return (
    <div className={classes.container}>
      <div className={classes.form_box}>
        <h1>Tell us about your work</h1>
        <form onSubmit={handleSubmit} className={classes.container_form}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the title of your task"
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter the description of your task"
            />
          </label>

          <label>
            Reward:
            <input
              type="number"
              name="reward"
              value={formData.reward}
              onChange={handleChange}
              placeholder="Enter the reward for your task in ETH"
            />
          </label>

          <label>
            Time to Complete:
            <input
              type="number"
              name="timeToComplete"
              value={formData.timeToComplete}
              onChange={handleChange}
              placeholder="Enter the time to complete your task in days"
            />
          </label>

          <label>
            Major Type of Task:
            <select
              id="dropdown"
              name="majorTypeOfTask"
              value={formData.majorTypeOfTask}
              onChange={handleChange}
            >
              {options_majorTypeOfTask.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.show}
                </option>
              ))}
            </select>
          </label>

          <label>
            Minor Type of Task:
            <select
              id="dropdown"
              name="minorTypeOfTask"
              value={formData.minorTypeOfTask}
              onChange={handleChange}
            >
              {options_minorTypeOfTask.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.show}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tech Stack:
            <input
              type="text"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
              placeholder="Enter the tech stack of your task"
            />
          </label>

          <button type="submit" disabled={wallet == null}>
            {isLoading ? (
              <div className="spin-wrapper">
                <div className="spin"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
