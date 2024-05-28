
  // index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Verifica la conexión a la base de datos
    await prisma.$connect();
    console.log("Conectado a la base de datos correctamente");

    // Obtener los datos de la tabla User
    const users = await prisma.user.findMany();
    console.log('Users:', users);
  } catch (error) {
    console.error("Error al conectar a la base de datos o al obtener datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
