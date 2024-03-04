import * as TeamApi from "../api/TeamRequest";

export const getTeamsByGroup = async (group) => {
  try {
    const response = await TeamApi.teamsByGroup(group);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTeams = async () => {
  try {
    const response = await TeamApi.allTeams();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTeamById = async (id) => {
  try {
    const response = await TeamApi.teamById(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
