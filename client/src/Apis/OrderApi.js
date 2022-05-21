import axiosInstance from "./axiosInstance";

const getOrderById = async (data) => {
  return await axiosInstance.get(`orders/id/${data.orderId}`)
}

export default {
  getOrderById,
}