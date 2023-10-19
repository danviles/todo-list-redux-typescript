import React from "react";

const TodoItemComponent = () => {
  return (
    <div
      className={`flex justify-between items-center w-full p-2 bg-[#567ca0] border border-black`}
    >
      <p>Item n</p>
      <button className="bg-white rounded-lg px-2 shadow hover:bg-slate-100">
        Delete
      </button>
    </div>
  );
};

export default TodoItemComponent;
