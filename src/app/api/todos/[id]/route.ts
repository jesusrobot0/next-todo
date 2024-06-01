import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

async function getTodo(id: string): Promise<Todo | null> {
  const todo = await prisma.todo.findFirst({ where: { id } });
  return todo;
}

export async function GET(request: Request, segments: Segments) {
  const id = segments.params.id;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `No se encontro un todo con el id: ${id}` },
      { status: 400 }
    );
  }

  return NextResponse.json({ todo });
}

export async function PUT(request: Request, segments: Segments) {
  const putSchema = yup.object().shape({
    title: yup.string().optional(),
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
  });

  const id = segments.params.id;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `No se encontro un todo con el id: ${id}` },
      { status: 400 }
    );
  }

  try {
    const body = await putSchema.validate(await request.json());
    const { title, description, complete } = body;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { title, description, complete },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
