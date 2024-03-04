import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const teamsByGroup = (group) => API.get("/team/group/" + group);
export const allTeams = () => API.get("/team");
export const teamById = (id) => API.get("/team/" + id);
