"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import classes from "@/styles/SeeWork.module.css";
import EachWorkitem from "@/components/EachWorkitem";
import useGetTask from "@/hooks/useGetTask";
import useGetAllrequestForTaskByTask from "@/hooks/useGetAllrequestForTaskByTask";
import { useMetamask } from "@/hooks/useMetamask";
import ReviewsInput from "@/components/Reviews/ReviewInput";
import ReviewsItem from "@/components/Reviews/ReviewItem";

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
  const {
    dispatch,
    state: { wallet },
  } = useMetamask();
  const MINORWORK = params.job;
  const IMAGEPATH = params.id.split("_")[1];
  const { isLoading, handleGetTask } = useGetTask();
  const { handleGetAllrequestForTaskByTask } = useGetAllrequestForTaskByTask();
  const [eachWorkitem, setEachWorkitem] = useState(MINORWORKS);
  const [allRequestForThisTask, setAllRequestForThisTask] = useState([]);

  useEffect(() => {
    const getFunction = async () => {
      const result = await handleGetTask(IMAGEPATH);
      console.log(result);
      setEachWorkitem(result);
      const response = await handleGetAllrequestForTaskByTask(IMAGEPATH);
      console.log(response);
      setAllRequestForThisTask(response);
    };
    getFunction();
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const callFunction = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${
            params.id.split("_")[0]
          }`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const responsedata = await response.json();
        setData(responsedata.response);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (wallet && params.id) callFunction();
  }, [wallet, params.id.split("_")[0]]);
  const setDataInput = (data) => {
    setData((prev) => [...prev, data]);
  };

  if (isLoading)
    return (
      <>
        <Header />
        <div className={classes.contaier}>
          <div className={classes.box}>
            <h1>
              {MINORWORK.replace(/-/g, " ")} -{IMAGEPATH}
            </h1>
            <h1>Loading...</h1>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Header />
      <div className={classes.contaier}>
        <div className={classes.box}>
          <h1>
            {MINORWORK.replace(/-/g, " ")} -{IMAGEPATH}
          </h1>
          <EachWorkitem workitem={eachWorkitem} />
          {eachWorkitem.creator.toUpperCase() == wallet.toUpperCase() ? (
            <>
              {allRequestForThisTask.length > 0 ? (
                <>
                  {allRequestForThisTask.map((request, index) => {
                    return (
                      <>
                        <div className={classes.request_container} key={index}>
                          <div className={classes.reques_container_box}>
                            <h1>
                              {index + 1}. User :<span>{request}</span>
                            </h1>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className={classes.request_container}>
                    <div className={classes.reques_container_box}>
                      <h1>No user Requested for this task yet!</h1>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className={classes.request_container}>
                <div className={classes.reques_container_box}>
                  <h1>
                    No user Requested for this task yet. Be the first one to do!
                  </h1>
                </div>
              </div>
            </>
          )}
          <div className={classes.reviewsInput}>
            <div className={classes.headingReview}>Reviews</div>
            <div className={classes.box_reviews}>
              {data.map((people, index) => (
                <ReviewsItem key={index} data={people} />
              ))}
            </div>
            <ReviewsInput
              setDataInput={setDataInput}
              jobId={params.id.split("_")[0]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
