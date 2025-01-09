"use client"
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/images/other/image2.png";
import Link from "next/link";
import { signupUser } from "@/apiRequest/signup";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";


interface ApiError {
    response?: {
        status: number;
        data?: {
            message?: string; // Add the message field for error responses
        };
    };
}

export default function SignUpPage() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false); // Loading state for preventing input
    const router = useRouter();
    const { data: session } = useSession()


    React.useEffect(() => {
        if (session) {
            router.push("/profile")
        }
    }, [session, router])

    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
            router.push("/");
        }
    }, []);

    const handleGoogleLogin = async () => {
        try {
            const res = await signIn('google', {
                callbackUrl: '/',
            });
            console.log(res);
            
        } catch (error) {
            toast({
                variant: "newVariant",
                title: "An error occurred during Google sign-in",
            });
        }
    };

    const handleFacebookLogin = () => {
        window.location.href = "/auth/facebook";
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        const full_name = `${firstName} ${lastName}`;
        const data = { full_name, email, password, phone_number: phoneNumber };

        setLoading(true); // Start loading state

        try {
            const response = await signupUser(data);
            console.log("API Response:", response); // Log the response object

            // If the signup is successful, show success message
            if (response && response.message) {
                toast({
                    variant: "newVariant",
                    title: response.message, // Display the success message from the API
                });
            } else {
                toast({
                    variant: "newVariant",
                    title: "Something went wrong. Please try again.", // Fallback error message
                });
            }
        } catch (err) {
            console.error("Sign up error:", err); // Log the error for debugging

            // Type guard to handle API error and display specific error messages
            if (isApiError(err)) {
                const errorMessage = err.response?.data?.message || "Something went wrong.";
                let toastTitle = "Error occurred. Please try again.";

                // Map specific error messages to display more descriptive toast
                if (errorMessage.includes("Email already registered")) {
                    toastTitle = "Email is already registered. Please login.";
                } else if (errorMessage.includes("Phone number already exists")) {
                    toastTitle = "Phone number is already registered. Please use a different number.";
                } else {
                    toastTitle = errorMessage; // Display the exact error message
                }

                toast({
                    variant: "newVariant",
                    title: toastTitle, // Display the specific error message in the toast
                });
            } else {
                toast({
                    variant: "newVariant",
                    title: "Something went wrong. Please try again.", // General error message
                });
            }
        } finally {
            setLoading(false); // Stop loading state after the request finishes
        }
    };

    // Type guard function to check if the error is from the API
    function isApiError(error: unknown): error is ApiError {
        return (
            typeof error === "object" &&
            error !== null &&
            "response" in error &&
            typeof (error as ApiError).response === "object"
        );
    }

    if (session) {
        return null
    }

    return (
        <div className="flex flex-col lg:flex-row w-full py-10 px-5 sm:px-10 md:px-20 lg:px-[100px] gap-5">
            <div className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2">
                <p className="flex justify-center items-center text-2xl font-semibold">Create Account</p>
                {error && <p className="text-red-500">{error}</p>}

                <div
                    className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={handleGoogleLogin}
                >
                    <FcGoogle size={28} />
                    <p className="text-base sm:text-lg">Connect With Google</p>
                </div>

                <div
                    className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={handleFacebookLogin}
                >
                    <FaFacebook size={28} color="blue" />
                    <p className="text-base sm:text-lg">Connect With Facebook</p>
                </div>

                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="First Name"
                            className="w-full outline-none"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            disabled={loading} // Disable input fields while loading
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Last Name"
                            className="w-full outline-none"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            disabled={loading} // Disable input fields while loading
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Phone Number"
                            className="w-full outline-none"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            disabled={loading} // Disable input fields while loading
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Email"
                            className="w-full outline-none"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading} // Disable input fields while loading
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Password"
                            type="password"
                            className="w-full outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading} // Disable input fields while loading
                        />
                    </div>

                    <div className="flex sm:flex-row flex-col justify-between w-full gap-3 sm:gap-5 mt-4">
                        <div className="bg-color1 h-12 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:opacity-90">
                            <button type="submit" className="w-full h-full" disabled={loading}> {/* Disable button while loading */}
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </div>
                        <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
                            <p className="text-color1 text-sm sm:text-base">Already have an account?</p>
                            <Link href="/login">
                                <p className="inline-flex text-black items-center font-semibold text-sm sm:text-base border-b border-current">
                                    SIGN IN
                                    <FaChevronRight size={15} className="ml-1" />
                                    <FaChevronRight size={15} />
                                </p>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-col p-5 sm:p-10 gap-5 w-full lg:w-1/2 bg-color5">
                <div className="flex justify-center items-center">
                    <Image
                        src={img1}
                        alt="Fashion Image"
                        className="w-full max-w-[90vw] sm:max-w-[60vw] md:max-w-[40vw] h-[30vh] object-contain"
                    />
                </div>
                <p className="font-normal text-lg sm:text-xl">Experience Fashion with Purpose.</p>
                <p className="text-sm sm:text-base">
                    At THVANI, we believe that fashion should do more than just look good—it should feel good, too. By
                    signing up, you`&apos;re becoming part of a community that values sustainability, innovation, and timeless
                    style.
                </p>
                <Link href="/women">
                    <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current hover:opacity-80">
                        Start Shopping Now
                        <FaChevronRight size={15} className="ml-2" />
                        <FaChevronRight size={15} className="ml-2" />
                    </p>
                </Link>
            </div>
        </div>
    );
}
