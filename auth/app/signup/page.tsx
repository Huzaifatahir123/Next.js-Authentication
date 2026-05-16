"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"    


export default function Signup(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        username:"",
        email:"",
        password:""

    });
    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/signup", user);
            console.log(response.data);
            router.push("/login");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={signUp}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                    <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
            </form>
            <p className="mt-4 text-gray-600">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link></p>
        </div>
        </>
    )
}