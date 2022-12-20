import { IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsOptional()
    name: string

    @IsOptional()
    code: string

    @IsOptional()
    state: string

    @IsOptional()
    status: string

    @IsOptional()
    is_deleted: number

    @IsOptional()
    created_date: string

    @IsOptional()
    updated_date: string

    @IsOptional()
    created_by: number

    @IsOptional()
    updated_by: number

}
