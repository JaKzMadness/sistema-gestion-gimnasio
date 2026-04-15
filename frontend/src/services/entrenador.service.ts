import { api } from "@/lib/api";

export interface Entrenador {
  id: number;
  usuarioId?: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  correoInstitucional: string;
  telefono?: string;
  especialidad: string;
  activo: boolean;
}

export type CreateEntrenadorDto = Omit<Entrenador, "id">;
export type UpdateEntrenadorDto = Partial<CreateEntrenadorDto>;

export const entrenadoresService = {
  findAll: () => api.get<Entrenador[]>("/entrenadores"),
  findOne: (id: number) => api.get<Entrenador>(`/entrenadores/${id}`),
  create: (data: CreateEntrenadorDto) =>
    api.post<Entrenador>("/entrenadores", data),
  update: (id: number, data: UpdateEntrenadorDto) =>
    api.put<Entrenador>(`/entrenadores/${id}`, data),
  remove: (id: number) => api.delete<void>(`/entrenadores/${id}`),
};
export {};