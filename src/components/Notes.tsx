import React from "react";

const Notes = () => {
  return (
    <div className="flex-none text-sm">
      <div
        className="bg-red-100 border-l-4  rounded-3xl my-2 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold">Warning:</p>
        <p>
          <strong className="text-[11px]">Create New</strong>, will
          erase you previous data.
        </p>
      </div>
      <div
        className="bg-orange-100 border-l-4 rounded-3xl my-2 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">Important Note:</p>
        <p>
          Please do not share your personal details or any other sensitive
          information on this website.
        </p>
      </div>

      <div
        className="bg-yellow-100 w-full border-l-4 my-2 rounded-3xl border-yellow-500 text-yellow-700 p-4"
        role="alert"
      >
        <p className="font-bold">Note:</p>
        <p>
          If you experience server issues after 20 or more conversations, please
          submit a new assistance request.
        </p>
      </div>
    </div>
  );
};

export default Notes;
