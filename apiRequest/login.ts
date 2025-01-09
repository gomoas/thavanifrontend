import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from "js-cookie";

export const LoginUser = async (data: any) => {
  const reqData = JSON.stringify(data); 
  try {
    const response = await axios({
      url: `${origin}/api/v1/auth/login`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    });

    const responseData = await response?.data;

    if (responseData?.token) {
      Cookies.set(adminCookie, responseData.token, { expires: 1 }); 
    }

    return responseData;
  } catch (err: any) {
    console.error("Login API call error:", err?.message);
    throw err;
  }
};
