-- CreateTable
CREATE TABLE "planes_membresia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "duracionDias" INTEGER NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "beneficios" TEXT[],
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planes_membresia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plan_history" (
    "id" SERIAL NOT NULL,
    "planMembresiId" INTEGER NOT NULL,
    "precioAnterior" DECIMAL(10,2) NOT NULL,
    "precioNuevo" DECIMAL(10,2) NOT NULL,
    "beneficiosAnteriores" TEXT[],
    "beneficiosNuevos" TEXT[],
    "usuarioId" INTEGER NOT NULL,
    "fechaCambio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plan_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miembros" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "documentoIdentidad" TEXT NOT NULL,
    "correoPersonal" TEXT NOT NULL,
    "telefono" TEXT,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "planMembresiaId" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "miembros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member_audit_log" (
    "id" SERIAL NOT NULL,
    "miembroId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cambios" TEXT NOT NULL,
    "valorAnterior" TEXT,
    "valorNuevo" TEXT,
    "fechaCambio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "member_audit_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entrenadores" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "documentoIdentidad" TEXT NOT NULL,
    "correoInstitucional" TEXT NOT NULL,
    "telefono" TEXT,
    "especialidad" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entrenadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainer_availability" (
    "id" SERIAL NOT NULL,
    "entrenadorId" INTEGER NOT NULL,
    "diaSemana" INTEGER NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trainer_availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rutinas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "objetivo" TEXT NOT NULL,
    "miembroId" INTEGER NOT NULL,
    "entrenadorId" INTEGER NOT NULL,
    "diasEntrenamiento" TEXT[],
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rutinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ejercicios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
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
    "tiempoDescansoSeg" INTEGER NOT NULL,
    "orden" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rutina_ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routine_history" (
    "id" SERIAL NOT NULL,
    "rutinaId" INTEGER NOT NULL,
    "entrenadorId" INTEGER,
    "cambios" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routine_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "body_measurements" (
    "id" SERIAL NOT NULL,
    "miembroId" INTEGER NOT NULL,
    "entrenadorId" INTEGER,
    "peso" DECIMAL(5,2) NOT NULL,
    "talla" DECIMAL(5,2) NOT NULL,
    "porcentajeGrasa" DECIMAL(5,2) NOT NULL,
    "fechaMedicion" TIMESTAMP(3) NOT NULL,
    "notas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "body_measurements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "planes_membresia_nombre_key" ON "planes_membresia"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "planes_membresia_codigo_key" ON "planes_membresia"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "miembros_documentoIdentidad_key" ON "miembros"("documentoIdentidad");

-- CreateIndex
CREATE UNIQUE INDEX "miembros_correoPersonal_key" ON "miembros"("correoPersonal");

-- CreateIndex
CREATE UNIQUE INDEX "entrenadores_documentoIdentidad_key" ON "entrenadores"("documentoIdentidad");

-- CreateIndex
CREATE UNIQUE INDEX "entrenadores_correoInstitucional_key" ON "entrenadores"("correoInstitucional");

-- CreateIndex
CREATE UNIQUE INDEX "trainer_availability_entrenadorId_diaSemana_horaInicio_hora_key" ON "trainer_availability"("entrenadorId", "diaSemana", "horaInicio", "horaFin");

-- CreateIndex
CREATE UNIQUE INDEX "rutinas_miembroId_key" ON "rutinas"("miembroId");

-- CreateIndex
CREATE UNIQUE INDEX "ejercicios_nombre_key" ON "ejercicios"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "rutina_ejercicios_rutinaId_ejercicioId_key" ON "rutina_ejercicios"("rutinaId", "ejercicioId");

-- AddForeignKey
ALTER TABLE "plan_history" ADD CONSTRAINT "plan_history_planMembresiId_fkey" FOREIGN KEY ("planMembresiId") REFERENCES "planes_membresia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miembros" ADD CONSTRAINT "miembros_planMembresiaId_fkey" FOREIGN KEY ("planMembresiaId") REFERENCES "planes_membresia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_audit_log" ADD CONSTRAINT "member_audit_log_miembroId_fkey" FOREIGN KEY ("miembroId") REFERENCES "miembros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainer_availability" ADD CONSTRAINT "trainer_availability_entrenadorId_fkey" FOREIGN KEY ("entrenadorId") REFERENCES "entrenadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutinas" ADD CONSTRAINT "rutinas_miembroId_fkey" FOREIGN KEY ("miembroId") REFERENCES "miembros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutinas" ADD CONSTRAINT "rutinas_entrenadorId_fkey" FOREIGN KEY ("entrenadorId") REFERENCES "entrenadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutina_ejercicios" ADD CONSTRAINT "rutina_ejercicios_rutinaId_fkey" FOREIGN KEY ("rutinaId") REFERENCES "rutinas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rutina_ejercicios" ADD CONSTRAINT "rutina_ejercicios_ejercicioId_fkey" FOREIGN KEY ("ejercicioId") REFERENCES "ejercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_history" ADD CONSTRAINT "routine_history_rutinaId_fkey" FOREIGN KEY ("rutinaId") REFERENCES "rutinas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "body_measurements" ADD CONSTRAINT "body_measurements_miembroId_fkey" FOREIGN KEY ("miembroId") REFERENCES "miembros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
