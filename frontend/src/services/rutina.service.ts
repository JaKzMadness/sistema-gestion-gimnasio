import { api } from "@/lib/api";

export interface Rutina {
  id: number;
  nombre: string;
  objetivo: string;
  miembroId: number;
  entrenadorId: number;
  diasEntrenamiento: string[];
  activo: boolean;
}

export type CreateRutinaDto = Omit<Rutina, "id">;
export type UpdateRutinaDto = Partial<CreateRutinaDto>;

export const rutinasService = {
  findAll: () => api.get<Rutina[]>("/rutinas"),
  findOne: (id: number) => api.get<Rutina>(`/rutinas/${id}`),
  create: (data: CreateRutinaDto) =>
    api.post<Rutina>("/rutinas", data),
  update: (id: number, data: UpdateRutinaDto) =>
    api.put<Rutina>(`/rutinas/${id}`, data),
  remove: (id: number) => api.delete<void>(`/rutinas/${id}`),
};
export {};