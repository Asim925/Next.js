import React from "react";

const Details = () => {
  return (
    <div className="lg:w-[50%]">
      <h1 className="xl:text-6xl lg:text-5xl md:text-4xl max-md:text-4xl mb-5 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300  bg-clip-text text-transparent">
        The Counter App
      </h1>
      <p className="xl:text-[1.5rem] lg:text-[1.4rem] md:text-[1.3rem] leading-9 max-md:leading-7">
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
