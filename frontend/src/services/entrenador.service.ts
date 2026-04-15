import { api } from "@/lib/api";

export interface Entrenador {
  id: number;
  usuarioId?: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  especialidad: string;
}

export type CreateEntrenadorDto = Omit<Entrenador, "id">;
export type UpdateEntrenadorDto = Partial<CreateEntrenadorDto>;

export const entrenadorService = {
  findAll: () => api.get<Entrenador[]>("/entrenador"),
  findOne: (id: number) => api.get<Entrenador>(`/entrenador/${id}`),
  create: (data: CreateEntrenadorDto) =>
    api.post<Entrenador>("/entrenador", data),
  update: (id: number, data: UpdateEntrenadorDto) =>
    api.put<Entrenador>(`/entrenador/${id}`, data),
  remove: (id: number) => api.delete<void>(`/entrenador/${id}`),
};
export {};