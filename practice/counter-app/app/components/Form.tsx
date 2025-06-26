import React, { useRef, useState } from "react";

const Form = () => {
  const [value, setValue] = useState(0);
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valueRef.current?.value) {
      let formValue = Number(valueRef.current?.value);
      setValue(formValue);
    }
    if (valueRef.current) valueRef.current.value = "";
  };

  return (
    <form className="lg:w-[50%] w-full" onSubmit={handleSubmit}>
      <div className="flex  lg:flex-col max-md:justify-around max-lg:gap-2">
        <input
          className="lg:my-5 max-lg:my-3 shadow appearance-none border-2 bg-purple-950 border-purple-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Enter the value"
          autoFocus
          ref={valueRef}
        />
        <button
          className="mb-3 max-lg:my-3 flex-shrink-2 grow-0 bg-purple-800  text-white border-purple-500 hover:bg-purple-950 "
          type="submit"
        >
          submit
        </button>
      </div>
      <div className="my-5">
        <p className="text-2xl my-5">
          {value ? "Your number is now: " + value : "Default number is: " + 0}
        </p>

        <div className="flex  gap-2">
          <button
            onClick={() => setValue(value + 1)}
            className="bg-fuchsia-500 border-fuchsia-950 hover:bg-fuchsia-600 active:bg-fuchsia-700 "
          >
            Increment
          </button>
          <button
            onClick={() => setValue(value - 1)}
            className="bg-indigo-500 border-indigo-950 hover:bg-indigo-600 active:bg-indigo-700"
          >
            Decrement
          </button>
          <button
            onClick={() => setValue(0)}
            className="bg-pink-500 border-pink-950 hover:bg-pink-600 active:bg-pink-700"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
