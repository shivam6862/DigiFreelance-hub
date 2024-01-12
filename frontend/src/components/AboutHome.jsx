import React from "react";
import classes from "@/styles/AboutHome.module.css";
import Link from "next/link";

const AboutHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h1>Find an Expert for Anything</h1>
        <p>
          Work with highly-efficient freelance talent from around the world.
        </p>
        <p>Take control of your project with DigiFreelance hub.</p>
        <p>Pay securely and confidently.</p>
        <Link href="/createNewJob">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutHome;
