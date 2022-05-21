import axiosInstance from "./axiosInstance";

// const login = async (data) => {
//   return await axiosInstance.post("/login", data);
// };
const register = async (data) => {
  return await axiosInstance.post("users", data);
}

const login = async (data) => {
  return await axiosInstance.post("users/login", data)
}

const getMe = async (data) => {
  return await axiosInstance.get(`/users/getMe/${data.userId}`)
}

// const updateUser = async (data) => {
//   console.log(data);
//   return await axiosInstance.put("/users/", data)
// }

// const getAll = async (data) => {
//   return await axiosInstance.get('/users/')
// }

export default {
  login,
  register,
  getMe,
  // updateUser,
  // getAll
}