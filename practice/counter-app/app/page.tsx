"use client";
import React, { useRef, useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);
  let valueRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.FormEvent) => {
    setValue(Number(valueRef.current?.value));
    e.preventDefault();
    console.log(value);
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
          type="text"
          placeholder="Enter the value"
          autoFocus
          onChange={handleChange}
        />
        <div>
          <button className="">Increment</button>
          <button className="">Decrement</button>
          <button className="">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default page;
