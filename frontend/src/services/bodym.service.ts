import { api } from "@/lib/api";

export interface BodyMeasurement {
  id: number;
  miembroId: number;
  entrenadorId?: number;
  peso: number;
  talla: number;
  porcentajeGrasa: number;
  fechaMedicion: string;
}

export type CreateBodyMeasurementDto = Omit<BodyMeasurement, "id">;
export type UpdateBodyMeasurementDto = Partial<CreateBodyMeasurementDto>;

export const bodyMeasurementService = {
  findAll: () => api.get<BodyMeasurement[]>("/body-measurement"),
  findOne: (id: number) => api.get<BodyMeasurement>(`/body-measurement/${id}`),
  create: (data: CreateBodyMeasurementDto) =>
    api.post<BodyMeasurement>("/body-measurement", data),
  update: (id: number, data: UpdateBodyMeasurementDto) =>
    api.put<BodyMeasurement>(`/body-measurement/${id}`, data),
  remove: (id: number) => api.delete<void>(`/body-measurement/${id}`),
};
export {};