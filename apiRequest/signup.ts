import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from "js-cookie";

export const signupUser = async (data: any) => {
    const reqData = JSON.stringify(data); // stringify the request data
    try {
      const response = await axios({
        url: `${origin}/api/v1/auth/signup`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: reqData,
      });
  
      const responseData = await response?.data;
  
      // Store token in cookies after successful signup
      if (responseData?.token) {
        Cookies.set(adminCookie, responseData.token, { expires: 1 }); // Token expires in 1 day
      }
  
      return responseData;
    } catch (err: any) {
      console.error("Signup API call error:", err?.message);
      throw err;
    }
  };
  