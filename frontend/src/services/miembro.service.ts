import { api } from "@/lib/api";

export interface Miembro {
  id: number;
  usuarioId?: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  correoPersonal: string;
  telefono?: string;
  fechaNacimiento: string;
  planMembresiaId: number;
  precioInscripcion: number;
  fechaInicio: string;
  fechaVencimiento: string;
  activo: boolean;
  createdAt: string;
}

export type CreateMiembroDto = Omit<Miembro, "id" | "createdAt">;
export type UpdateMiembroDto = Partial<CreateMiembroDto>;

export const miembroService = {
  findAll: () => api.get<Miembro[]>("/miembro"),
  findOne: (id: number) => api.get<Miembro>(`/miembro/${id}`),
  create: (data: CreateMiembroDto) =>
    api.post<Miembro>("/miembro", data),
  update: (id: number, data: UpdateMiembroDto) =>
    api.put<Miembro>(`/miembro/${id}`, data),
  remove: (id: number) => api.delete<void>(`/miembro/${id}`),
};
export {};