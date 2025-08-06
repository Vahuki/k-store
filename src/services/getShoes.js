import axios from "axios"

const API_URL = "https://raw.githubusercontent.com/Vahuki/database-kstore/main/shoes.json"

export const getShoes = async () =>{
    try {
        const res = await axios.get(API_URL);
        return res.data
    } catch (error) {
        console.log("Lỗi khi call api",error);
        return [];
    }
}