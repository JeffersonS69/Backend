import axios from "axios";

const URL = "http://localhost:8000";

console.log("2", URL);

const tasksApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/tasks`,
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post("/", task);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/tasks/api/v1/tasks/${id}`);
