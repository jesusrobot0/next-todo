import { Todo } from "@prisma/client";
import { Check } from "lucide-react";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  const { complete, title, description, createdAt } = todo;

  return (
    <article className="flex gap-4 p-6 border border-dashed border-[#ccc] rounded-lg bg-white">
      <button className="flex justify-center items-center border w-[30px] h-[30px] border-black rounded-lg">
        {complete ? <Check /> : null}
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
