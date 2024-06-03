import { Todo } from "@prisma/client";

interface Args {
  title: string;
  description?: string;
}
export async function createTodo({ title, description }: Args): Promise<Todo> {
  const body = { title, description };

  const request = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const newTodo = await request.json();

  return newTodo;
}
