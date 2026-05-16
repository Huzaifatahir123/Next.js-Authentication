import connectToDB from "@/db_config/dbconfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"

connectToDB();
export async function POST(request: NextRequest) {
    const { username, email, password } = await request.json();
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        // Generate JWT token
        
        return NextResponse.json({ message: "User created successfully", newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while creating the user" }, { status: 500 });
    }
}