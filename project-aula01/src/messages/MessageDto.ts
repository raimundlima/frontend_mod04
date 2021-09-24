import { IsNotEmpty, IsString } from "class-validator";

export class MessageDto {
    @IsString()
    @IsNotEmpty()
    texto: string;
}
