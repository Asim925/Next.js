"use client";
import React, { useState } from "react";
import ApiData, { Data } from "./api/ApiData";

const Page = () => {
  const [data, setData] = useState<Data[]>([]);
  let tableHead = ["ID", "User ID", "Title", "Completion", "Delete"];

  let handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ApiData setData={setData} />

      <h1 className="text-center w-full mt-10 text-5xl font-extrabold">
        TODO APP
      </h1>
      <div className="m-10 border-gray-500 border-2  flex flex-col gap-2">
        <table>
          <thead className="text-left border-b-2 border-gray-400">
            <tr>
              {tableHead.map((item, index) => (
                <th className="p-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="border-b-2 border-gray-300" key={index}>
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.userId}</td>
                <td className="p-3">{item.title}</td>
                <td className="p-3">
                  {item.completed === true ? "Yes" : "No"}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={item.completed === false}
                    className={`px-4 py-3 bg-red-500 rounded-2xl text-white  transition   ${
                      item.completed === false
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-red-600 hover:scale-104"
                    }`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
