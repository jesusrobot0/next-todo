import { Todo } from "@prisma/client";
import { TodoItem } from "../todo-item/TodoItem";

interface Props {
  todos: Todo[];
}

export function TodosGrid({ todos }: Props) {
  return (
    <section className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem key={`rest-list-item-${todo.id}`} todo={todo} />
      ))}
    </section>
  );
}
