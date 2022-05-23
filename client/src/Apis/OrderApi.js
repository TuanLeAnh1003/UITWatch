import axiosInstance from "./axiosInstance";

const getOrderById = async (data) => {
  return await axiosInstance.get(`orders/id/${data.orderId}`)
}

const placeOrder = async (data) => {
  return await axiosInstance.post("api/v1/orders", data);
}

const getOrderAndUser = async (data) => {
  return await axiosInstance.get('/orders/getOrderAndUser', data)
}

export default {
  getOrderById,
  placeOrder,
  getOrderAndUser,
}