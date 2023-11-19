// update-user.dto.ts
import { IsOptional, IsString, IsBoolean, IsEnum, ArrayUnique, IsNotEmpty } from 'class-validator';
import { UserRole } from '../schemas/user_schema';

export class UpdateUserDto {
    @IsOptional()
    @IsString({ message: 'A user must have a string title' })
    firstName?: string;

    @IsOptional()
    @IsString({message: 'Users last name must be string!'})
    lastName?: string;

    @IsNotEmpty({ message: 'Please send the ID of the user you want to update' })
    @IsString()
    currentId: string;

    @IsNotEmpty({ message: 'Please send the ID of the user you want to update' })
    @IsString()
    updateId: string;

    @IsOptional()
    @IsString({ message: 'A user must have a string password' })
    password?: string;

    @IsOptional()
    @IsEnum(UserRole, { message: 'Invalid user role' })
    role?: UserRole;

    @IsOptional()
    @IsString({ message: 'Invalid email' })
    email?: string;

    @IsBoolean({message : 'User marketing consent must be boolean value!'})
    @IsOptional()
    marketingConsent?: boolean; 
}
