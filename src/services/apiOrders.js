import axios from "axios";
import { BASE_URL } from "../utils/constants";

const headers = {
  token: localStorage.getItem("userToken"),
};

export async function checkoutSession({shippingAddress, id}) {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/orders/checkout-session/${id}?url=http://localhost:5173`,
      { shippingAddress },
      { headers }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createCashOrder({shippingAddress, id}) {

  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/orders/${id}`,
      { shippingAddress },
      { headers }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something wrong happened!");
    
  }
}


export async function getUserOrders(cartOwner) {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/v1/orders/user/${cartOwner}`
    );
    return res.data;
  } catch (error) {
    throw new Error("Something wrong happened!");
    
  }
}

