import axios from "axios";

const API_URL = "https://raw.githubusercontent.com/Vahuki/database-kstore/main/bag.json";

export const getBags = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.log("Lỗi khi call API:", error);
    return [];
  }
};
