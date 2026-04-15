import { api } from "@/lib/api";

export interface PlanMembresia {
  id: number;
  nombre: string;
  codigo: string;
  duracionDias: number;
  precio: number;
  beneficios: string[];
  activo: boolean;
}

export type CreatePlanMembresiaDto = Omit<PlanMembresia, "id">;
export type UpdatePlanMembresiaDto = Partial<CreatePlanMembresiaDto>;

export const planesMembresiaService = {
  findAll: () => api.get<PlanMembresia[]>("/planes-membresia"),
  findOne: (id: number) => api.get<PlanMembresia>(`/planes-membresia/${id}`),
  create: (data: CreatePlanMembresiaDto) =>
    api.post<PlanMembresia>("/planes-membresia", data),
  update: (id: number, data: UpdatePlanMembresiaDto) =>
    api.put<PlanMembresia>(`/planes-membresia/${id}`, data),
  remove: (id: number) => api.delete<void>(`/planes-membresia/${id}`),
};

export {};