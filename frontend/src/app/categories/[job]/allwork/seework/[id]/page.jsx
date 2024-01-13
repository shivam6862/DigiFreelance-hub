import React from "react";
import Header from "@/components/Header";
import classes from "@/styles/SeeWork.module.css";
import EachWorkitem from "@/components/EachWorkitem";

const MINORWORKS = {
  id: 1,
  title: "Selling Phone Website",
  description:
    "Create an e-commerce website for selling phones. the website should have a login page, a home page, a product page, and a cart page. The website should be responsive and should be able to work on mobile devices. The website should be able to accept payments. The website should be able to send emails to the user. The website should be able to send emails to the admin. The website should be able to send emails to the seller. The website should be able to send emails to the delivery person.",
  reward: 80,
  timeToComplete: 12,
  majorTypeOfTask: "Development",
  minorTypeOfTask: "Website",
  techStack: "Angular, Express.js",
  creator: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  createdAt: 1619000000,
  isUserRequestForTask: false,
};

const Page = ({ params }) => {
  const MINORWORK = params.job;
  const IMAGEPATH = params.id;

  return (
    <>
      <Header />
      <div className={classes.contaier}>
        <div className={classes.box}>
          <h1>
            {MINORWORK.replace(/-/g, " ")} -{IMAGEPATH}
          </h1>
          <EachWorkitem workitem={MINORWORKS} />
        </div>
      </div>
    </>
  );
};

export default Page;
