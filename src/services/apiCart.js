import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function addProductToCart({ productId, userToken }) {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/cart`,
      {
        productId,
      },
      {
        headers: {
          token: userToken,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    throw new Error("Something wrong happened!");
  }
}

export async function getLoggedUserCart(userToken) {
  if (!userToken) return null;
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/cart`, {
      headers: {
        token: userToken,
      },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Something wrong happened!");
  }
}

export async function clearUserCart(userToken) {
  try {
    const res = await axios.delete(`${BASE_URL}/api/v1/cart`, {
      headers: {
        token: userToken,
      },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Something wrong happened!");
  }
}

export async function deleteCartItem({ productId, userToken }) {
  try {
    const res = await axios.delete(`${BASE_URL}/api/v1/cart/${productId}`, {
      headers: {
        token: userToken,
      },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Something wrong happened!");
  }
}

export async function updateItemQuantity({ productId, count, userToken }) {
  try {
    const res = await axios.put(
      `${BASE_URL}/api/v1/cart/${productId}`,
      {
        count: count.toString(),
      },
      {
        headers: {
          token: userToken,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    throw new Error("Something wrong happened!");
  }
}
