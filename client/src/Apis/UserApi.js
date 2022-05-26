import axiosInstance from "./axiosInstance";

// const login = async (data) => {
//   return await axiosInstance.post("/login", data);
// };
const register = async (data) => {
  return await axiosInstance.post("/users/register", data);
}

const login = async (data) => {
  return await axiosInstance.post("users/login", data)
}

const likeProduct = async (data) => {
  return await axiosInstance.put("/users/likeProduct", data)
}

const removeLikeProduct = async (data) => {
  return await axiosInstance.put("/users/unlikeProduct", data)
}

const isLiked = async (data) => {
  return await axiosInstance.post('/users/likeProduct', data)
}

const addToCart = async (data) => {
  return await axiosInstance.put("/users/carts/addToCart", data)
}

const removeCart = async (data) => {
  return await axiosInstance.put('/users/carts/removeCart', data)
}

const removeAllCart = async (data) => {
  return await axiosInstance.put('/users/carts/removeAllCart', data)
}

const getMe = async (data) => {
  return await axiosInstance.get(`/users/id/${data.id}`)
}

const updateUser = async (data) => {
  console.log(data);
  return await axiosInstance.put("/users/", data)
}

// const getAll = async (data) => {
//   return await axiosInstance.get('/users/')
// }

export default {
  login,
  register,
  likeProduct,
  removeLikeProduct,
  addToCart,
  getMe,
  updateUser,
  isLiked,
  removeCart,
  removeAllCart,
  // getAll
}