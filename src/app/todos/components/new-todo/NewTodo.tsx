"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CirclePlus, Trash } from "lucide-react";
import { PopUp } from "../pop-up/PopUp";
import { deleteAllCompletedTodos } from "../../actions/todo-actions";

export function NewTodo() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  const handleDelete = async () => {
    await deleteAllCompletedTodos();
    router.refresh();
  };

  return (
    <div className="mb-8 flex justify-between items-center">
      <button
        className="flex items-center justify-center gap-2 h-[45px] px-6 text-white rounded-2xl bg-[dodgerblue]"
        onClick={togglePopup}
      >
        <CirclePlus size={18} />
        Add New Todo
      </button>

      <button
        className="flex items-center justify-center gap-2 h-[45px] px-6 text-white rounded-2xl bg-[tomato]"
        onClick={handleDelete}
      >
        <Trash size={18} />
        Delete completed
      </button>

      <PopUp isVisible={isVisible} onTogglePopup={togglePopup} />
    </div>
  );
}
