"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface ToggleTodoArgs {
  id: string;
  complete: boolean;
}

interface CreateTodoArgs {
  title: string;
  description?: string;
}

export async function toggleTodo({
  id,
  complete,
}: ToggleTodoArgs): Promise<Todo> {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo con id ${id} no encontrado`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/actions");
  return updatedTodo;
}

export async function createTodo({ title, description }: CreateTodoArgs) {
  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        description: description!,
      },
    });

    revalidatePath("/dashboard/actions");
    return todo;
  } catch {
    return { message: "Error creating to-do" };
  }
}

export async function deleteAllCompletedTodos() {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath("/dashboard/actions");
  } catch (error) {
    return { message: "Error deleting to-do" };
  }
}
