import axios from "axios"

const API_URL = "http://localhost:3002/bags"

export const getBags = async () =>{
    try {
        const res = await axios.get(API_URL);
        return res.data
    } catch (error) {
        console.log("Lỗi khi call api",error);
        return [];
    }
}