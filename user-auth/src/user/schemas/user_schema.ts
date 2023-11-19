import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// Enum for user roles
export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}


// Define the document type for the user schema
export type UserDocument = User & Document;

// Define the user schema
@Schema({
    timestamps: true, // Add timestamps for createdAt and updatedAt
})
export class User {

    @Prop({ required: true }) // Ensure name is required
    firstName: string;

    @Prop({ required: true }) // Ensure name is required
    lastName: string;

    @Prop({ required: true }) // Ensure password is required
    password: string;


    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true , default: false}) // Ensure name is required
    marketingConsent: boolean;

    
    @Prop({ required: true, enum: UserRole, default: UserRole.USER }) // Add the role property
    role: UserRole;


}

// Create the Mongoose schema for the user class
export const UserSchema = SchemaFactory.createForClass(User);
