import axiosInstance from "./axiosInstance";

const placeOrder = async (data) => {
  return await axiosInstance.post("api/v1/orders", data);
}

export default {
  placeOrder
}