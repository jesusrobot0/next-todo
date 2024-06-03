import clsx from "clsx";
import { CirclePlus, CircleX, Trash } from "lucide-react";

interface Props {
  isVisible: boolean;
  onTogglePopup: () => void;
}

export function PopUp({ isVisible, onTogglePopup }: Props) {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000069] cursor-pointer",
        isVisible || "hidden"
      )}
      onClick={onTogglePopup}
    >
      <div className="min-w-[375px] w-1/3 p-8 flex flex-col gap-8 rounded bg-white">
        <header>
          <p className="text-xl font-bold">Create a New Todo</p>
        </header>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-bold">Title</span>
            <input
              type="text"
              placeholder=""
              className="h-[50px] px-4 border border-[#ccc] rounded"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-bold">Description</span>
            <textarea className="h-[150px] px-4 border border-[#ccc] rounded"></textarea>
          </label>
          <fieldset className="flex gap-4 mt-8">
            <button
              className="flex items-center justify-center gap-2 h-[45px] px-4 text-white rounded bg-[#78c4f4]"
              onClick={onTogglePopup}
            >
              <CirclePlus size={18} />
              Add Todo
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 h-[45px] px-4 text-white rounded bg-red-400"
              onClick={onTogglePopup}
            >
              <CircleX size={18} />
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
