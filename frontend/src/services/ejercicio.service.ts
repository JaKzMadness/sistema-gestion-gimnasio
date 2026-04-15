import { api } from "@/lib/api";

export interface Ejercicio {
  id: number;
  nombre: string;
  descripcion?: string;
}

export type CreateEjercicioDto = Omit<Ejercicio, "id">;
export type UpdateEjercicioDto = Partial<CreateEjercicioDto>;

export const ejerciciosService = {
  findAll: () => api.get<Ejercicio[]>("/ejercicios"),
  findOne: (id: number) => api.get<Ejercicio>(`/ejercicios/${id}`),
  create: (data: CreateEjercicioDto) =>
    api.post<Ejercicio>("/ejercicios", data),
  update: (id: number, data: UpdateEjercicioDto) =>
    api.put<Ejercicio>(`/ejercicios/${id}`, data),
  remove: (id: number) => api.delete<void>(`/ejercicios/${id}`),
};
export {};