import { api } from "@/lib/api";

export interface PlanMembresia {
  id: number;
  nombre: string;
  codigo: string;
  duracionDias: number;
  precio: number;
  beneficios: string[];
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CreatePlanMembresiaDto = Omit<PlanMembresia, "id" | "createdAt" | "updatedAt">;
export type UpdatePlanMembresiaDto = Partial<CreatePlanMembresiaDto>;

export const planMembresiaService = {
  findAll: () => api.get<PlanMembresia[]>("/plan-membresia"),
  findOne: (id: number) => api.get<PlanMembresia>(`/plan-membresia/${id}`),
  create: (data: CreatePlanMembresiaDto) =>
    api.post<PlanMembresia>("/plan-membresia", data),
  update: (id: number, data: UpdatePlanMembresiaDto) =>
    api.put<PlanMembresia>(`/plan-membresia/${id}`, data),
  remove: (id: number) => api.delete<void>(`/plan-membresia/${id}`),
};
export {};