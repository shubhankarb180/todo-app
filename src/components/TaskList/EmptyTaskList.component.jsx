import React from "react";

const EmptyTaskList = ({ title,listHeader }) => {
  return (
    <>
      <h1 className="lg:mx-20 px-2 text-lg font-medium">{listHeader}</h1>
      <div
        className="flex flex-wrap justify-start lg:ml-24 lg:py-2 ml-4 py-1"
        id="tasklist"
      >
          <p>- No {title} tasks available</p>
      </div>
    </>
  );
};

export default EmptyTaskList;
