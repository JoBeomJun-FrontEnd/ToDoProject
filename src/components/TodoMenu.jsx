import React from 'react';

export default function TodoMenu() {
  return (
    <ul className="font-bold pr-3">
      <button className="text-orange-500 hover:text-orange-500">All</button>
      <button className="text-orange-400 pl-2.5 hover:text-orange-500">
        Active
      </button>
      <button className="text-orange-400 pl-2.5 hover:text-orange-500">
        Completed
      </button>
    </ul>
  );
}
