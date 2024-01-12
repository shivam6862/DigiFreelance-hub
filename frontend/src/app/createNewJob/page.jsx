import React from "react";
import classes from "@/styles/CreateNewJob.module.css";
import JobForm from "@/components/JobForm";

const Page = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.top_description}>
          <div className={classes.description_box}>
            <h1>Post a jod on DigiFreelance hub</h1>
            <p>
              The job boards for hiring designers, developer and creative
              professoinals
            </p>
          </div>
        </div>
        <div className={classes.middle_background}></div>
        <div className={classes.bottom_form}>
          <div className={classes.box_form}>
            <JobForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
