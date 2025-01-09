import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from 'js-cookie'

export const fetchUsersPaginationsData = async (page: any, limit: any, search: any) => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/users/pagination?page=${page}&limit=${limit}&search=${search}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error;
    }
};


export const fetchUsersData = async () => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/users`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error;
    }
};

