"use client";
import React, { useRef, useState } from "react";
import Details from "./components/Details";
import Form from "./components/Form";

const page = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 px-[10lvw] h-lvh ">
      <Details />
      <Form />
    </div>
  );
};

export default page;
