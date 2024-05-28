
// seed.js
import { Prismasecuencia } from '@prisma/Aspirante';
const prisma = new Prismasecuencia();
async function main() {
    await prisma.user.createMany({
      data: [
        { id: 'aspiranteSequence.secuencia', 
        nombre: 'Lucas Miguel Suarez', 
         secuencia: '1', }
      ],
      skipDuplicates: true, // Omitir si ya existen
    });
    console.log('Datos insertados.');
  }
  
  main()
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });


    import { PrismaAspirante } from '@prisma/cliente';

const Prisma = new PrismaAspirante();

async function main() {
  // Crear secuencias iniciales si no existen
  await prisma.secuencia.createMany({
    data: [
      { nombre: 'curso', secuencia: 1 },
      { nombre: 'Aspirante', secuencia: 1 },
      { nombre: 'Inscripcion', secuencia: 1 },
    ],
    skipDuplicates: true, // Omitir si ya existen
  });

  // Obtener y mostrar las secuencias
    const secuencias = await prisma.secuencia.findMany();
    console.log('Secuencias:', secuencias);


  // Ejemplo de creación de un nuevo Aspirante con un ID de secuencia
    const aspiranteSequence = await prisma.secuencia.findUnique({
        where: { nombre: 'Aspirante' },
    });
    const newAspirante = await prisma.aspirante.create({
        data: {
            id: aspiranteSequence.secuencia,
            nombre: 'Lucas Miguel Suarez',
            identificacion: '1234567890',
        },
    });
    console.log('Nuevo Aspirante:', newAspirante);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
