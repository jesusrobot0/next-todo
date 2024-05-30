import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

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
