import { api } from "@/lib/api";

export interface Usuario {
  id: number;
  email: string;
  password: string;
  rol: "ADMIN" | "RECEPCIONISTA" | "ENTRENADOR" | "MIEMBRO";
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CreateUsuarioDto = Omit<Usuario, "id" | "createdAt" | "updatedAt">;
export type UpdateUsuarioDto = Partial<CreateUsuarioDto>;

export const usuarioService = {
  findAll: () => api.get<Usuario[]>("/usuario"),
  findOne: (id: number) => api.get<Usuario>(`/usuario/${id}`),
  create: (data: CreateUsuarioDto) =>
    api.post<Usuario>("/usuario", data),
  update: (id: number, data: UpdateUsuarioDto) =>
    api.put<Usuario>(`/usuario/${id}`, data),
  remove: (id: number) => api.delete<void>(`/usuario/${id}`),
};
export {};