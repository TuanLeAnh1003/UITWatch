import axiosInstance from "./axiosInstance";

const getAll = async () => {
  return await axiosInstance.get('/products/')
}

const getProductById = async (data) => {
  return await axiosInstance.get(`/products/id/${data.productId}`)
}

const getProducts = async (data) => {
  return await axiosInstance.get(`/products?name=${data}`)
}

export default {
  getAll,
  getProductById,
  getProducts
}