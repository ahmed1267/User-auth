import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, IsArray, IsDateString, Validate, MinLength, MaxLength, IsEnum, IsEmail, IsPhoneNumber, Matches, ArrayUnique, IsBoolean } from 'class-validator';
import { UserRole } from '../schemas/user_schema';


export class CreateUserDto {
    // Shop title, must not be empty, and should be a string
    @IsNotEmpty({ message: 'A user must have a title' })
    @IsString({ message: 'A user must have a string title' })
    firstName: string;

    @IsNotEmpty({ message: 'A user must have a title' })
    @IsString({ message: 'A user must have a string title' })
    lastName: string;

    @IsNotEmpty({ message: 'A user must have a title' })
    @IsBoolean({ message: 'A user must have a boolean marketing consent' })
    marketingConsent: boolean;

    // User password, must not be empty, and should be a valid date string
    @IsNotEmpty({ message: 'A user must have a password' })
    @IsString({ message: 'A user must have a string password' })
    @MinLength(6, { message: 'A user password must be 6 chracters minimum' })
    @MaxLength(25, { message: 'A user password must be 25 chracters maximum' })
    password: string;

    @Prop({ required: true, unique: true })
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string;

    @Prop({ required: true })
    @IsNotEmpty({ message: 'A user must have a role' })
    @IsEnum(UserRole, { message: 'Invalid user role' })
    role: UserRole;


}