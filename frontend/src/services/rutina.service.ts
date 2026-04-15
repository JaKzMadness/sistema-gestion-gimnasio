import { api } from "@/lib/api";

export interface Rutina {
  id: number;
  nombre: string;
  objetivo: string;
  miembroId: number;
  entrenadorId: number;
  activo: boolean;
}

export type CreateRutinaDto = Omit<Rutina, "id">;
export type UpdateRutinaDto = Partial<CreateRutinaDto>;

export const rutinaService = {
  findAll: () => api.get<Rutina[]>("/rutina"),
  findOne: (id: number) => api.get<Rutina>(`/rutina/${id}`),
  create: (data: CreateRutinaDto) =>
    api.post<Rutina>("/rutina", data),
  update: (id: number, data: UpdateRutinaDto) =>
    api.put<Rutina>(`/rutina/${id}`, data),
  remove: (id: number) => api.delete<void>(`/rutina/${id}`),
};
export {};