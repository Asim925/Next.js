"use client";
import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    event.preventDefault();
  };
  return (
    <div>
      <p>
        The Counter App is here! 🔢✨ It comes with fully functioning buttons
        that let you increment, decrement, or even 🔄 reset the value. It starts
        with a field where you can enter the initial value 📝 — once provided,
        that value is displayed and can be adjusted anytime with the buttons!
        🎛️💡 Perfect for keeping track of counts in a fun and interactive way!
        😄📲
      </p>
      <div>
        <input
          className="mt-3 shadow appearance-none border-2 bg-orange-950 border-orange-500 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Enter the value"
          autoFocus
          onChange={handleChange}
        />
        <button className="p-3" type="submit">
          Submit
        </button>
        <div>
          <p className="text-2xl">
            {value
              ? "Your number is now: " + value
              : "Default number is: " + value}
          </p>

          <button className="">Increment</button>
          <button className="">Decrement</button>
          <button className="">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default page;
