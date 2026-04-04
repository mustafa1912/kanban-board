import axios from "axios";

const API = "http://localhost:4000/tasks";

export const GetTasks = () => axios.get(API);
export const CreateTask = (data) => axios.post(API, data);
export const UpdateTask = (id, data) => axios.put(`${API}/${id}`, data);
export const DeleteTask = (id) => axios.delete(`${API}/${id}`);