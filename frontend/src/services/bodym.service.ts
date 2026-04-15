import { api } from "@/lib/api";

export interface BodyMeasurement {
  id: number;
  miembroId: number;
  entrenadorId?: number;
  peso: number;
  talla: number;
  porcentajeGrasa: number;
  fechaMedicion: string;
  notas?: string;
}

export type CreateBodyMeasurementDto = Omit<BodyMeasurement, "id">;
export type UpdateBodyMeasurementDto = Partial<CreateBodyMeasurementDto>;

export const bodyMeasurementsService = {
  findAll: () => api.get<BodyMeasurement[]>("/body-measurements"),
  findOne: (id: number) =>
    api.get<BodyMeasurement>(`/body-measurements/${id}`),
  create: (data: CreateBodyMeasurementDto) =>
    api.post<BodyMeasurement>("/body-measurements", data),
  update: (id: number, data: UpdateBodyMeasurementDto) =>
    api.put<BodyMeasurement>(`/body-measurements/${id}`, data),
  remove: (id: number) =>
    api.delete<void>(`/body-measurements/${id}`),
};
export {};