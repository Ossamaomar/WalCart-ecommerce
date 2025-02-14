import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getLoggedUserWishlist(userToken) {
  if (!userToken) return null;
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/wishlist`, {
      headers: {
        token: userToken,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something wrong happened!");
  }
}

export async function addProductToWishlist({ productId, userToken }) {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/wishlist`,
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
    console.log(error);
    throw new Error("Something wrong happened!");
  }
}

export async function deleteWishlistItem({ productId, userToken }) {
  try {
    const res = await axios.delete(`${BASE_URL}/api/v1/wishlist/${productId}`, {
      headers: {
        token: userToken,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something wrong happened!");
  }
}
