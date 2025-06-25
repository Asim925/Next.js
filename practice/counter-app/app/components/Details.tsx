import React from "react";

const Details = () => {
  return (
    <div className="w-[50%]">
      <div className="flex gap-2">
        <p className="text-6xl">🔮</p>
        <h1 className="text-6xl mb-5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400  bg-clip-text text-transparent">
          The Counter App
        </h1>
      </div>
      <p className="text-xl leading-9">
        The Counter App is here! 🔢✨ It comes with fully functioning buttons
        that let you increment, decrement, or even 🔄 reset the value. It starts
        with a field where you can enter the initial value 📝 — once provided,
        that value is displayed and can be adjusted anytime with the buttons!
        🎛️💡 Perfect for keeping track of counts in a fun and interactive way!
        😄📲
      </p>
    </div>
  );
};

export default Details;
