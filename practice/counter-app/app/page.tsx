"use client";
import React, { useRef, useState } from "react";
import Details from "./components/Details";
import Form from "./components/Form";

const page = () => {
  return (
    <>
      <div className=" flex justify-center items-center lg:flex-row max-lg:flex-col lg:gap-x-10 lg:px-[10lvw] h-lvh ">
        <Details />
        <Form />
      </div>
    </>
  );
};

export default page;
