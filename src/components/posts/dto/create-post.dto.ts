import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  post_name: string;

  @IsOptional()
  post_description: string;

  @IsBoolean()
  is_active: boolean;
}
