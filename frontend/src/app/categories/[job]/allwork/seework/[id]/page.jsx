import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }) => {
  const MINORWORK = params.job;
  const IMAGEPATH = params.id;

  return (
    <>
      <Header />
      <div>
        <div>
          {MINORWORK}
          {IMAGEPATH}
        </div>
      </div>
    </>
  );
};

export default Page;
