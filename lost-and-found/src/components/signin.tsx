import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8080/api/users/login", {
                username,
                password,
            });

            if (response.status === 200) {
                console.log("Login successful:", response.data);
                navigate("/page");
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid username or password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blend-color-dodge px-4">
            <Card className="w-full max-w-[500px] p-6 shadow-xl rounded-2xl">
                <CardTitle className="text-center text-3xl font-semibold mb-6">
                    Sign In
                </CardTitle>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-700 rounded-lg p-2"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-700 rounded-lg p-2"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-950"
                        >
                            Sign In
                        </button>
                        {error && (
                            <p className="text-red-500 text-center">{error}</p>
                        )}
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/signup.tsx" className="underline underline-offset-4">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignIn;
