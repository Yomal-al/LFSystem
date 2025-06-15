import React, { useState } from "react";
import axios from "axios";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Password match check
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/users/signup", {
                username: form.username,
                email: form.email,
                password: form.password,
            });

            console.log("Signup successful", response.data);
            navigate("/");
        } catch (err) {
            if (err.response?.status === 409) {
                setError("User already exists");
            } else {
                setError("Signup failed. Try again.");
            }
            console.error("Signup failed", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
            <Card className="w-full max-w-[500px] p-6 shadow-xl rounded-2xl">
                <CardTitle className="text-center text-3xl font-semibold mb-6">
                    Sign Up
                </CardTitle>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={form.username}
                            className="w-full border border-gray-700 rounded-lg p-2"
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            className="w-full border border-gray-700 rounded-lg p-2"
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            className="w-full border border-gray-700 rounded-lg p-2"
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            className="w-full border border-gray-700 rounded-lg p-2"
                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                            required
                        />

                        {error && <div className="text-red-500 text-sm">{error}</div>}

                        <button
                            type="submit"
                            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-950"
                        >
                            Sign Up
                        </button>

                        <div className="mt-4 text-center text-sm">
                            <Link to="/" className="underline underline-offset-4">
                                Already have an account?
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUp;
