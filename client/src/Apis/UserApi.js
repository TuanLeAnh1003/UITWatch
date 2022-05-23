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
  return await axiosInstance.post("/api/v1/users/likeProduct", data)
}

const removeLikeProduct = async (data) => {
  return await axiosInstance.delete("/api/v1/users/likeProduct", data)
}

const addToCart = async (data) => {
  return await axiosInstance.post("/api/v1/users/addToCart", data)
}

const filter = async (data) => {
  return await axiosInstance.get("/api/v1/users/filter", data)
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
  filter,
  getMe,
  updateUser,
  // getAll
}