# 🏋️ Sistema de Gestión de Gimnasio

Sistema web para digitalizar la gestión de un gimnasio local, reemplazando el registro manual en cuadernos y hojas de cálculo.

## 📋 Descripción

Permite gestionar miembros, planes de membresía, entrenadores, rutinas de ejercicios y el seguimiento del progreso físico de cada cliente.

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Backend | NestJS + TypeScript |
| Frontend | Next.js + TypeScript |
| Base de datos | PostgreSQL |
| ORM | Prisma |
| Infraestructura | Docker + Docker Compose |

## 📁 Estructura del Proyecto
sistema-gestion-gimnasio/
├── backend/         → API REST con NestJS
├── frontend/        → Interfaz web con Next.js
├── docker-compose.yml
├── .env.example
└── README.md
## 🚀 Instalación y Configuración

### Requisitos previos
- [Node.js 20+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/JaKzMadness/sistema-gestion-gimnasio.git
cd sistema-gestion-gimnasio
```

**2. Configurar variables de entorno**
```bash
cp .env.example .env
```
Edita el archivo `.env` con tus valores locales.

**3. Levantar la base de datos con Docker**
```bash
docker-compose up -d
```

**4. Instalar dependencias y ejecutar migraciones**
```bash
cd backend
npm install
npx prisma migrate dev
```

**5. Iniciar el backend**
```bash
npm run start:dev
```

**6. Iniciar el frontend**
```bash
cd ../frontend
npm install
npm run dev
```

## 📌 Casos de Uso

| ID | Historia de Usuario |
|----|-------------------|
| HU-01 | Registrar miembro con datos personales, plan y fecha de inicio |
| HU-02 | Consultar y editar datos personales de un miembro |
| HU-03 | Crear y configurar planes de membresía |
| HU-04 | Actualizar precios y beneficios de planes |
| HU-05 | Registrar entrenadores con especialidad y disponibilidad |
| HU-06 | Actualizar horarios de entrenadores |
| HU-07 | Crear rutinas de ejercicios y asignarlas a miembros |
| HU-08 | Consultar y modificar rutinas de miembros |
| HU-09 | Registrar medidas corporales periódicas |
| HU-10 | Consultar historial de medidas corporales |

## 🗂️ Gestión del Proyecto

- [Issues y Sprints](https://github.com/JaKzMadness/sistema-gestion-gimnasio/issues)
- [Milestones](https://github.com/JaKzMadness/sistema-gestion-gimnasio/milestones)

## 📄 Licencia

MIT — ver [LICENSE](./LICENSE)
