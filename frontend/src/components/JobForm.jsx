"use client";
import React, { useState } from "react";

import classes from "@/styles/JobForm.module.css";
import useCreateTask from "@/hooks/useCreateTask";

const initialState = {
  title: "Selling Phone Website",
  description: "Create an e-commerce website for selling phones.",
  reward: 4,
  timeToComplete: 6,
  majorTypeOfTask: "Development",
  minorTypeOfTask: "Website",
  techStack: "REACT, KAGGLE, NEXTJS, NODEJS, EXPRESSJS, MONGODB, HTML, CSS",
};

const JobForm = () => {
  const { handleCreateTask } = useCreateTask();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialState);
    console.log(formData);
    try {
      const response = await handleCreateTask(formData);
      if (response) console.log("Task created successfully");
      else console.log("Error during task creating");
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      throw err;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
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
            <input
              type="text"
              name="majorTypeOfTask"
              value={formData.majorTypeOfTask}
              onChange={handleChange}
              placeholder="Enter the major type of your task"
            />
          </label>

          <label>
            Minor Type of Task:
            <input
              type="text"
              name="minorTypeOfTask"
              value={formData.minorTypeOfTask}
              onChange={handleChange}
              placeholder="Enter the minor type of your task"
            />
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
