import { Todo } from "@prisma/client";

interface Args {
  id: string;
  complete: boolean;
}
export async function updateTodo({ id, complete }: Args): Promise<Todo> {
  const body = { complete };

  const request = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const updatedTodo = await request.json();

  return updatedTodo;
}
