import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from 'js-cookie'

export const postCategoryData = async (data:any) => {
    const reqData = JSON.stringify(data)
    const token = Cookies.get(adminCookie)
    try {
        const response = await axios({
            url:`${origin}/api/v1/admin/create-category`,
            method:'post',
            headers:{
                'Authorization': `Bearer ${token}`, 
                'Content-Type':'application/json'
            },
            data:reqData
        })

        const responseData = await response?.data

        return responseData;
    }
    catch (err:any) {
        console.log(err?.message);
        
    }

}

// Fetch paginated category data
export const fetchCategoryPaginationsData = async (page: any, limit: any, search: any) => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/category/pagination?page=${page}&limit=${limit}&search=${search}`,
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

// Fetch all category data
export const fetchCategoryData = async () => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/category`,
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

export const editCategoryData = async (data: any, id: string) => {
    const reqData = JSON.stringify(data);
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/category/${id}`,
            method: 'put',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            data: reqData
        });

        return response?.data;
    } catch (err: any) {
        console.log("API call error:", err);
        throw err;
    }
};


export const deleteCategoryData = async (id: any) => {
    const token = Cookies.get(adminCookie)
    try {
        const response = await axios({
            url: `${origin}/api/v1/category/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
        })
        return response?.data;
    } catch (err: any) {
        console.log(err?.message);
        throw err;
    }
}
