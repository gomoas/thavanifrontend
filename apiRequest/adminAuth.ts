import axios from "axios";
import { origin } from "./config";  // Replace with the actual origin
import Cookies from "js-cookie";

// export const signupAdmin = async (data: any) => {
//   const reqData = JSON.stringify(data);  
//   try {
//     const response = await axios({
//       url: `${origin}/api/v1/admin/create`, 
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: reqData,
//     });

//     const responseData = response?.data;

//     if (responseData?.token) {
//       Cookies.set("adminAuthToken", responseData.token, { expires: 1 });  // Token expires in 1 day
//     }

//     return responseData;
//   } catch (err: any) {
//     console.error("Admin Signup API call error:", err?.message);
//     throw err;
//   }
// };

export const loginAdmin = async (data: any) => {
  const reqData = JSON.stringify(data);  
  try {
    const response = await axios({
      url: `${origin}/api/v1/admin-auth/login`,  
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    });

    const responseData = response?.data;

    if (responseData?.token) {
      Cookies.set("adminAuthToken", responseData.token, { expires: 1 }); 
    }

    return responseData;
  } catch (err: any) {
    console.error("Admin Login API call error:", err?.message);
    throw err;
  }
};
