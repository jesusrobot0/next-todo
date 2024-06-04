export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/app/todos/components";

export default async function RestPage() {
  const todos = await prisma.todo.findMany({ orderBy: { title: "asc" } });
  return (
    <>
      <main>
        <NewTodo />
        <TodosGrid todos={todos} />
      </main>
    </>
  );
}
