export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/app/todos/components";
import { TitlePage } from "@/app/ui/components";

export default async function RestPage() {
  const todos = await prisma.todo.findMany({ orderBy: { title: "asc" } });
  return (
    <>
      <main>
        <TitlePage title="Server actions todos" />
        <NewTodo />
        <TodosGrid todos={todos} />
      </main>
    </>
  );
}
