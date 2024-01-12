import React from "react";

const Page = ({ params }) => {
  const PATHNAME = params.job;

  return (
    <div>
      <div>{PATHNAME}</div>
    </div>
  );
};

export default Page;
