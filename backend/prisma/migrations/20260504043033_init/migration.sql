-- CreateTable
CREATE TABLE "planes_membresia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "beneficios" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planes_membresia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miembros" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "planMembresiaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "miembros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entrenadores" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entrenadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "horarios_entrenador" (
    "id" SERIAL NOT NULL,
    "entrenadorId" INTEGER NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "horarios_entrenador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rutinas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "miembroId" INTEGER NOT NULL,
    "entrenadorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rutinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ejercicios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "grupoMuscular" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rutina_ejercicios" (
    "id" SERIAL NOT NULL,
    "rutinaId" INTEGER NOT NULL,
    "ejercicioId" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticiones" INTEGER NOT NULL,
    "descansoSeg" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rutina_ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medidas_corporales" (
    "id" SERIAL NOT NULL,
    "miembroId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "peso" DOUBLE PRECISION NOT NULL,
    "talla" DOUBLE PRECISION NOT NULL,
    "porcentajeGrasa" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medidas_corporales_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "miembros_documento_key" ON "miembros"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "miembros_correo_key" ON "miembros"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "entrenadores_documento_key" ON "entrenadores"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "entrenadores_correo_key" ON "entrenadores"("correo");

-- AddForeignKey
ALTER TABLE "miembros" ADD CONSTRAINT "miembros_planMembresiaId_fkey" FOREIGN KEY ("planMembresiaId") REFERENCES "planes_membresia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "horarios_entrenador" ADD CONSTRAINT "horarios_entrenador_entrenadorId_fkey" FOREIGN KEY ("entrenadorId") REFERENCES "entrenadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutinas" ADD CONSTRAINT "rutinas_miembroId_fkey" FOREIGN KEY ("miembroId") REFERENCES "miembros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutinas" ADD CONSTRAINT "rutinas_entrenadorId_fkey" FOREIGN KEY ("entrenadorId") REFERENCES "entrenadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutina_ejercicios" ADD CONSTRAINT "rutina_ejercicios_rutinaId_fkey" FOREIGN KEY ("rutinaId") REFERENCES "rutinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutina_ejercicios" ADD CONSTRAINT "rutina_ejercicios_ejercicioId_fkey" FOREIGN KEY ("ejercicioId") REFERENCES "ejercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medidas_corporales" ADD CONSTRAINT "medidas_corporales_miembroId_fkey" FOREIGN KEY ("miembroId") REFERENCES "miembros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
