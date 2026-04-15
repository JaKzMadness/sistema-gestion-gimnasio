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
}

export type CreateMiembroDto = Omit<Miembro, "id">;
export type UpdateMiembroDto = Partial<CreateMiembroDto>;

export const miembrosService = {
  findAll: () => api.get<Miembro[]>("/miembros"),
  findOne: (id: number) => api.get<Miembro>(`/miembros/${id}`),
  create: (data: CreateMiembroDto) =>
    api.post<Miembro>("/miembros", data),
  update: (id: number, data: UpdateMiembroDto) =>
    api.put<Miembro>(`/miembros/${id}`, data),
  remove: (id: number) => api.delete<void>(`/miembros/${id}`),
};
export {};