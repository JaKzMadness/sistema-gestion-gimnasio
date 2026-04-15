import { api } from "@/lib/api";

export interface Ejercicio {
  id: number;
  nombre: string;
}

export type CreateEjercicioDto = Omit<Ejercicio, "id">;
export type UpdateEjercicioDto = Partial<CreateEjercicioDto>;

export const ejercicioService = {
  findAll: () => api.get<Ejercicio[]>("/ejercicio"),
  findOne: (id: number) => api.get<Ejercicio>(`/ejercicio/${id}`),
  create: (data: CreateEjercicioDto) =>
    api.post<Ejercicio>("/ejercicio", data),
  update: (id: number, data: UpdateEjercicioDto) =>
    api.put<Ejercicio>(`/ejercicio/${id}`, data),
  remove: (id: number) => api.delete<void>(`/ejercicio/${id}`),
};
export {};