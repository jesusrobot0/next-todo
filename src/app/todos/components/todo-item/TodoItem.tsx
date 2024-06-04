"use client";

import { Todo } from "@prisma/client";
import clsx from "clsx";
import { Check } from "lucide-react";

interface Props {
  todo: Todo;
  toggleTodo: ({
    id,
    complete,
  }: {
    id: string;
    complete: boolean;
  }) => Promise<Todo | void>;
}

export function TodoItem({ todo, toggleTodo }: Props) {
  const { id, complete, title, description, createdAt } = todo;

  return (
    <article
      className={clsx(
        "flex gap-4 p-6 border-2 border-dashed border-[#ccc] rounded-lg bg-white",
        complete && "border-[#96d2b0]"
      )}
    >
      <button
        className={clsx(
          "flex justify-center items-center border min-w-[30px] min-h-[30px] w-[30px] h-[30px] border-[#ccc] rounded-lg ",
          complete && "bg-[#2da562] border-[#96d2b0] border-[3px]"
        )}
        onClick={() => {
          toggleTodo({ id, complete: !complete });
        }}
      >
        {complete ? <Check color="white" /> : null}
      </button>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <p className="text-xs text-[#666]">
          Created At: {createdAt.toDateString()}
        </p>
      </div>
    </article>
  );
}
