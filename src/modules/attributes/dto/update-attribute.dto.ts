import { IsOptional, IsString } from "class-validator";

export class UpdateAttributeDto {
    @IsOptional()
    name: string

    @IsOptional()
    state: string

    @IsOptional()
    status: string

    @IsOptional()
    is_deleted: number

    @IsOptional()
    updated_date: string

    @IsOptional()
    updated_by: number

}
