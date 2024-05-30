import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  // CREATE ONE TODO
  // await prisma.todo.create({
  //   data: {
  //     title: "Tarea de prueba",
  //     description: "descripción de la tarea de prueba",
  //   },
  // });

  await prisma.todo.createMany({
    data: [
      {
        title: "Conquistar el mundo",
        description: "Comenzar con algo pequeño, como el patio trasero.",
      },
      {
        title: "Hacer una broma épica",
        description: "Algo memorable pero que no termine en la cárcel.",
      },
      {
        title: "Aprender a hablar con las plantas",
        description: "Empezar con un 'Hola' podría funcionar.",
      },
      {
        title: "Entrenar un ejército de gatos ninja",
        description:
          "Encontrar gatos dispuestos a colaborar es el primer paso.",
      },
      {
        title: "Hacer una maratón de películas",
        description:
          "Elegir entre 'El Señor de los Anillos' extendida o todas las de 'Star Wars'.",
      },
      {
        title: "Escribir una novela",
        description: "Al menos llegar hasta el título y la primera línea.",
      },
      {
        title: "Dominar el arte del disfraz",
        description: "Practicar haciendo que el cartero no me reconozca.",
      },
      {
        title: "Encontrar un hobby",
        description:
          "Algo menos demandante que aprender una framework de JS cada semana.",
      },
      {
        title: "Ganar un campeonato de mirar fijamente",
        description: "Entrenar mirando a los ojos de mi reflejo sin parpadear.",
      },
      {
        title: "Organizar una carrera de caracoles",
        description: "Buscar patrocinadores y caracoles con motivación.",
      },
      {
        title: "Cultivar el jardín de gnomos perfecto",
        description: "Encontrar al Gnomeo ideal.",
      },
    ],
  });

  return NextResponse.json({
    message: "Seed executed",
  });
}
