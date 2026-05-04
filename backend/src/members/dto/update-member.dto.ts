import {
  IsString,
  IsEmail,
  IsDateString,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateMemberDto {
  @IsString()
  @IsOptional()
  nombres?: string;

  @IsString()
  @IsOptional()
  apellidos?: string;

  @IsEmail()
  @IsOptional()
  correo?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsDateString()
  @IsOptional()
  fechaNacimiento?: string;

  @IsInt()
  @IsOptional()
  planMembresiaId?: number;
}
