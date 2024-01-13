"use client";
import React from "react";
import classes from "@/styles/EachWorkitem.module.css";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { useMetamask } from "@/hooks/useMetamask";

const EachWorkitem = ({ workitem }) => {
  const {
    dispatch,
    state: { wallet },
  } = useMetamask();

  const {
    title,
    description,
    reward,
    timeToComplete,
    majorTypeOfTask,
    minorTypeOfTask,
    techStack,
    creator,
    createdAt,
    isUserRequestForTask,
  } = workitem;
  const date = new Date(createdAt * 1000);
  const techStackArray = techStack.split(",");

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.details}>
          <div className={classes.title}>
            <h1>{title}</h1>
          </div>
          <div className={classes.time_location}>
            <div>
              <p>Posted At: {date.toUTCString()}</p>
            </div>
            <div className={classes.time_location_inside}>
              <MdOutlineMyLocation /> Worldwide
            </div>
          </div>
          <div className={classes.description}>
            <p>{description}</p>
          </div>
          <div className={classes.different_logo_box}>
            <div className={classes.different_logo}>
              <FaRegClock />
              <p>Less than 30hrs/week</p>
            </div>
            <div className={classes.different_logo}>
              <FaCalendarAlt />
              <p>{timeToComplete} months</p>
            </div>
            <div className={classes.different_logo}>
              <GiSkills />
              <p>Intermediate</p>
            </div>
            <div className={classes.different_logo}>
              <GiTakeMyMoney />
              <p>{reward}</p>
            </div>
            <div className={classes.different_logo}>
              <MdOutlineMyLocation />
              <p>Remote work</p>
            </div>
            <div className={classes.different_logo}>
              <MdOutlineWorkHistory />
              <p>Ongoing project</p>
            </div>
            <div className={classes.different_logo}>
              <FaFileContract />
              <p>Contact to hire</p>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.majorTypeOfTask}>
              Major Type Of Task: {majorTypeOfTask}
            </div>
            <div className={classes.minorTypeOfTask}>
              Minor Type Of Task: {minorTypeOfTask}
            </div>
            <div className={classes.techStack}>
              <h1>Tech Stack : </h1>
              {techStackArray.map((tech) => (
                <div className={classes.techStack_item}>{tech}</div>
              ))}
            </div>
          </div>
          <div className={classes.button}>
            {wallet === creator ? (
              <button className={classes.button_creater} disabled={true}>
                Creator
              </button>
            ) : isUserRequestForTask ? (
              <button className={classes.button1}>Requested</button>
            ) : (
              <button className={classes.button2}>Request</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachWorkitem;
