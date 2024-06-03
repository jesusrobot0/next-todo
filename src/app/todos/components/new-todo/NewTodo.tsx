"use client";

import { CirclePlus, Trash } from "lucide-react";
import { useState } from "react";
import { PopUp } from "../pop-up/PopUp";

export function NewTodo() {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mb-8 flex justify-between items-center">
      <button
        className="flex items-center justify-center gap-2 h-[45px] px-4 text-white rounded bg-[#78c4f4]"
        onClick={togglePopup}
      >
        <CirclePlus size={18} />
        Add New Todo
      </button>

      <button className="flex items-center justify-center gap-2 h-[45px] px-4 text-white rounded bg-red-400">
        <Trash size={18} />
        Delete all completed
      </button>

      <PopUp isVisible={isVisible} onTogglePopup={togglePopup} />
    </div>
  );
}
