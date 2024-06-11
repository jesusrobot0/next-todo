import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import * as yup from "yup";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const skip = Number(searchParams.get("skip") ?? 0);
  const take = Number(searchParams.get("take") ?? 5);

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser un numero" },
      { status: 400 }
    );
  }

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take tiene que ser un numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ skip, take });
  return NextResponse.json({ todos, here: "paginaction" });
}

export async function POST(request: NextRequest) {
  const postSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
  });

  try {
    const body = await postSchema.validate(await request.json());
    const { title, description, complete } = body;

    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        complete,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } });
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
