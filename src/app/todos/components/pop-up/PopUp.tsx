import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CirclePlus, CircleX } from "lucide-react";
import clsx from "clsx";
import { createTodo } from "../../helpers";

interface Props {
  isVisible: boolean;
  onTogglePopup: () => void;
}

const initialTodo = {
  title: "",
  description: "",
};

export function PopUp({ isVisible, onTogglePopup }: Props) {
  const [todo, setTodo] = useState(initialTodo);
  const router = useRouter();

  const handleModalClick = (e: MouseEvent) => {
    // Previene que el clic se propague al overlay
    e.stopPropagation();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (todo.title.trim() === "") return;

    await createTodo({
      title: todo.title,
      description: todo.description,
    });

    router.refresh();
    onTogglePopup();
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000069] cursor-pointer",
        isVisible || "hidden"
      )}
      onClick={onTogglePopup}
    >
      <div
        className="min-w-[375px] w-1/3 p-8 flex flex-col gap-8 rounded bg-white"
        onClick={handleModalClick}
      >
        <header>
          <p className="text-xl font-bold">Create a New Todo</p>
        </header>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="font-bold">Title</span>
            <input
              type="text"
              placeholder="Organize a snail race"
              value={todo.title}
              name="title"
              onChange={handleChange}
              className="h-[50px] px-4 border border-[#ccc] rounded"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-bold">Description</span>
            <textarea
              className="h-[150px] p-4 border border-[#ccc] rounded"
              value={todo.description}
              name="description"
              onChange={handleChange}
            ></textarea>
          </label>
          <fieldset className="flex gap-4 mt-8">
            <button className="flex items-center justify-center gap-2 h-[45px] px-4 text-white rounded bg-[#78c4f4]">
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
