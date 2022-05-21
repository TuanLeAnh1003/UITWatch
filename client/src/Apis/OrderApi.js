import axiosInstance from "./axiosInstance";

const getOrderById = async (data) => {
  return await axiosInstance.get(`orders/id/${data.orderId}`)
}

const placeOrder = async (data) => {
  return await axiosInstance.post("api/v1/orders", data);
}

export default {
  getOrderById,
  placeOrder,
}