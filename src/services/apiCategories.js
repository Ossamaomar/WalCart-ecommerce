import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getAllCategories() {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/categories`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}