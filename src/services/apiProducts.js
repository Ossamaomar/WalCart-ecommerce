import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getAllProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/products`);
    return res.data.data
  } catch (error) {
    throw new Error(error);
  }
}


export async function getProductDetails(id) {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
    return res.data.data
  } catch (error) {
    console.log(error);
  }
}