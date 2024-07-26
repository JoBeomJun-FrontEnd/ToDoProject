import React from 'react';

export default function TodoAdd() {
  return (
    <div className="font-bold pl-6 pr-6 pt-3 pb-3 flex justify-center items-center w-full h-16 bg-orange-100">
      <input
        className="rounded-s-md pl-3 h-full w-full"
        type="text"
        placeholder="Add Todo"
      />
      <button className="bg-orange-500 hover:bg-orange-400 rounded-e-md text-white w-2/12 h-full">
        Add
      </button>
    </div>
  );
}
