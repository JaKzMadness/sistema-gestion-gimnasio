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

export type CreateUsuarioDto = Omit<Usuario, "id">;
export type UpdateUsuarioDto = Partial<CreateUsuarioDto>;

export const usuariosService = {
  findAll: () => api.get<Usuario[]>("/usuarios"),
  findOne: (id: number) => api.get<Usuario>(`/usuarios/${id}`),
  create: (data: CreateUsuarioDto) =>
    api.post<Usuario>("/usuarios", data),
  update: (id: number, data: UpdateUsuarioDto) =>
    api.put<Usuario>(`/usuarios/${id}`, data),
  remove: (id: number) => api.delete<void>(`/usuarios/${id}`),
};
