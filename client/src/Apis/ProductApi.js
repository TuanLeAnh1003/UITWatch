import axiosInstance from "./axiosInstance";

const getAll = async () => {
  return await axiosInstance.get('/products/')
}

const getProductById = async (data) => {
  return await axiosInstance.get(`/products/id/${data.productId}`)
}

const createProduct = async (data) => {
  return await axiosInstance.post('/products', data)
}

const updateProduct = async (data) => {
  return await axiosInstance.put('/products', data)
}

const removeProduct = async (data) => {
  return await axiosInstance.delete(`/products/${data.productId}`)
}

const getProducts = async (data) => {
  return await axiosInstance.get(`/products?name=${data}`)
}

export default {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
  getProducts
}