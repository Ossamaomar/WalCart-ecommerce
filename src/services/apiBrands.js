import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getAllBrands() {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/brands`);
    return res.data.data
  } catch (error) {
    throw new Error(error);
    
  }
}