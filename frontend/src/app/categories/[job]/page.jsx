import React from "react";
import classes from "@/styles/categoriesTypes.module.css";
import Header from "@/components/Header";

const Page = ({ params }) => {
  const PATHNAME = params.job;

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.box}>{PATHNAME}</div>
      </div>
    </>
  );
};

export default Page;
