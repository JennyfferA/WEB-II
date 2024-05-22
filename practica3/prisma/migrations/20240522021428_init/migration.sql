-- CreateTable
CREATE TABLE "Aspirante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Aspirante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_inicio" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "id_aspirante" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "valor_cancelado" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Inscripcion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_id_aspirante_fkey" FOREIGN KEY ("id_aspirante") REFERENCES "Aspirante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
