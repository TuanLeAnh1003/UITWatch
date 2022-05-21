import axiosInstance from "./axiosInstance";

const getAll = async () => {
  return await axiosInstance.get('/news/')
}

const getNewsById = async (data) => {
  return await axiosInstance.get(`/news/id/${data.newsId}`)
}

export default {
  getAll,
  getNewsById,
}