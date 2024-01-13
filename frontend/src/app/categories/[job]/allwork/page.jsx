import React from "react";
import Header from "@/components/Header";
import imagePathForallCatogries from "../../../../../public/data/imagePath.json";
import classes from "@/styles/AllWork.module.css";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }) => {
  const PATHNAME = params.job;
  const AllImagePAth = imagePathForallCatogries[PATHNAME];
  const INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Header />
      <div className={classes.cotainer}>
        <h1>All available work</h1>
        <div className={classes.box}>
          {AllImagePAth.map((imagePath, index) => (
            <div className={classes.hover_effect}>
              <div className={classes.imageBox} key={index}>
                <Link
                  href={`/categories/${PATHNAME}/allwork/seework/${INDEX[index]}`}
                >
                  <Image
                    width={500}
                    height={500}
                    src={`/image/${PATHNAME}/${imagePath}`}
                    alt="image"
                    key={imagePath}
                  />
                </Link>
                <div className={classes.button}>See more</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
