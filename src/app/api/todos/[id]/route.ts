import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, segments: Segments) {
  const id = segments.params.id;
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    return NextResponse.json(
      { message: `No se encontro un todo con el id: ${id}` },
      { status: 400 }
    );
  }

  return NextResponse.json({ todo });
}
