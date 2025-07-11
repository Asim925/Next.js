"use client";
import React, { useEffect } from "react";

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  setData: (data: Data[]) => void;
}

const ApiData = ({ setData }: Props) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return null; // This component doesn't render anything
};

export default ApiData;
