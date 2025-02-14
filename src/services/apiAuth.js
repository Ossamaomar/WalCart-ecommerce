import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function signup({ name, email, password, rePassword, phone }) {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/signup`, {
      name,
      email,
      password,
      rePassword,
      phone,
    });
    return res;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
}

export async function signin({ email, password }) {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/signin`, {
      email,
      password,
    });

    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function veifyToken(userToken) {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/auth/verifyToken`, {
      headers: {
        token: userToken,
      },
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUserData({ userToken, userData }) {
  try {
    const res = await axios.put(
      `${BASE_URL}/api/v1/users/updateMe`,
      userData,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return res;
  } catch (error) {
    throw new Error(error);
    
  }
}

export async function forgotPassword(email) {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/forgotPasswords`, {
      email,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function verifyResetCode(resetCode) {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/verifyResetCode`, {
      resetCode,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function resetPassword({ email, newPassword }) {
  try {
    const res = await axios.put(`${BASE_URL}/api/v1/auth/resetPassword`, {
      email,
      newPassword,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function changePassword({
  data,
  userToken,
}) {
  try {
    const res = await axios.put(
      `${BASE_URL}/api/v1/users/changeMyPassword`,
      {
        currentPassword: data.currentPassword,
        password : data.password,
        rePassword: data.rePassword,
      },
      {
        headers: {
          token: userToken,
        },
      }
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
