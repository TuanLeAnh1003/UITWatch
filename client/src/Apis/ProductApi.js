import axiosInstance from "./axiosInstance";

const getAll = async () => {
  return await axiosInstance.get('/products/')
}

const getProductById = async (data) => {
  return await axiosInstance.get(`/products/id/${data.productId}`)
}

export default {
  getAll,
  getProductById,
}