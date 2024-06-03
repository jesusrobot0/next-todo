"use client";

import { useRouter } from "next/navigation";
import { TodoItem } from "../todo-item/TodoItem";
import { updateTodo } from "../../helpers";
import { Todo } from "@prisma/client";

interface Props {
  todos: Todo[];
}

interface Args {
  id: string;
  complete: boolean;
}

export function TodosGrid({ todos = [] }: Props) {
  const router = useRouter();

  const toggleTodo = async ({ id, complete }: Args) => {
    const updatedTodo = await updateTodo({ id, complete });
    router.refresh();
  };

  return (
    <section className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={`rest-list-item-${todo.id}`}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </section>
  );
}
