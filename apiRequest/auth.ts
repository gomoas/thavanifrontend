import axios from "axios";
import Cookies from "js-cookie";
import { origin } from "./config";

// Google login function that triggers the OAuth flow
export const googleLogin = () => {
    window.location.href = `${origin}/auth/google`; // Redirects to Google OAuth endpoint
};

// Callback function that is called after Google login
export const googleCallback = async (code: string) => {
    try {
        const response = await axios({
            method: "get",
            url: `${origin}/auth/google/callback?code=${code}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.data;
        Cookies.set('adminCookie', responseData.token); // Store JWT token in cookies
        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};
