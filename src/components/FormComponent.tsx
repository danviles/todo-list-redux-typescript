import React from "react";

const FormComponent = () => {
  return (
    <form action="" className="flex flex-col gap-2 ">
      <input
        className="rounded-lg px-2 border border-black"
        name="name"
        placeholder="TODO name"
        type="text"
      />
      <select name="color" className="rounded-lg border border-black">
        <option selected>Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <button className="bg-white rounded-lg shadow hover:bg-slate-100 border border-black">
        Add item
      </button>
    </form>
  );
};

export default FormComponent;
