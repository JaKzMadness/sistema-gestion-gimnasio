import {
  IsString,
  IsEmail,
  IsDateString,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateMemberDto {
  @IsString()
  nombres: string;

  @IsString()
  apellidos: string;

  @IsString()
  documento: string;

  @IsEmail()
  correo: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsDateString()
  fechaInicio: string;

  @IsInt()
  planMembresiaId: number;
}
