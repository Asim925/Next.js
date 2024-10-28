"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  let { push } = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
