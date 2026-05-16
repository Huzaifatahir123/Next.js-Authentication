import connectToDB from "@/db_config/dbconfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

connectToDB();

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
        }               
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);      

        if (!isPasswordValid) {


            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
        }   
        // Generate JWT token`
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        const response = NextResponse.json({ message: "Login successful", user, }, { status: 200 });
        response.cookies.set("token", token, { httpOnly: true, sameSite: "strict" });

        return response;
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while logging in" }, { status: 500 });
    }
}