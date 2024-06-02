import prisma from "@/lib/prisma";
import { TodosGrid } from "@/app/todos/components";

export default async function RestPage() {
  const todos = await prisma.todo.findMany({ orderBy: { title: "asc" } });
  return (
    <>
      <h1>Rest Page</h1>
      <main>
        <TodosGrid todos={todos} />
      </main>
    </>
  );
}
