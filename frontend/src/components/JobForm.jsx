"use client";
import React, { useState } from "react";

import classes from "@/styles/JobForm.module.css";

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
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialState);
    console.log(formData);
    try {
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
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Reward:
            <input
              type="number"
              name="reward"
              value={formData.reward}
              onChange={handleChange}
            />
          </label>

          <label>
            Time to Complete:
            <input
              type="number"
              name="timeToComplete"
              value={formData.timeToComplete}
              onChange={handleChange}
            />
          </label>

          <label>
            Major Type of Task:
            <input
              type="text"
              name="majorTypeOfTask"
              value={formData.majorTypeOfTask}
              onChange={handleChange}
            />
          </label>

          <label>
            Minor Type of Task:
            <input
              type="text"
              name="minorTypeOfTask"
              value={formData.minorTypeOfTask}
              onChange={handleChange}
            />
          </label>

          <label>
            Tech Stack:
            <input
              type="text"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
