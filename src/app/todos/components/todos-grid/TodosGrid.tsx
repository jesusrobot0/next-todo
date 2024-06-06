"use client";

import { useRouter } from "next/navigation";
import { TodoItem } from "../todo-item/TodoItem";
import { Todo } from "@prisma/client";
import { toggleTodo } from "../../actions";

interface Props {
  todos: Todo[];
}

interface Args {
  id: string;
  complete: boolean;
}

export function TodosGrid({ todos = [] }: Props) {
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
